// phantomMouse.ts
type Listener = (pos: { x: number; y: number }) => void;

const mq = window.matchMedia("(pointer: coarse)");
let isTouch = mq.matches;
mq.addEventListener("change", (e) => (isTouch = e.matches));

class phantomMouseController {
  private x = 0;
  private y = 0;
  private tx = 0;
  private ty = 0;
  private vx = 0;
  private vy = 0;
  private listeners = new Set<Listener>();
  private grid: HTMLElement | null = null;
  private started = false;

  private readonly accel = 0.0018; // how eagerly it steers toward target
  private readonly friction = 0.96; // velocity damping (drag)
  private readonly maxSpeed = 2; // px/frame cap

  subscribe(fn: Listener) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  setGrid(el: HTMLElement) {
    this.grid = el;
    if (!this.started) {
      this.started = true;
      requestAnimationFrame(this.step);
    }
  }

  init(el: HTMLElement) {
    const r = el.getBoundingClientRect();
    this.x = this.tx = r.left + r.width / 2;
    this.y = this.ty = r.top + r.height / 2;
    this.vx = 0;
    this.vy = 0;
  }

  private step = () => {
    if (isTouch && this.grid) {
      const r = this.grid.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight) {
        const m = 20;
        const [l, rt, t, b] = [
          Math.max(r.left, 0) + m,
          Math.min(r.right, innerWidth) - m,
          Math.max(r.top, 0) + m,
          Math.min(r.bottom, innerHeight) - m,
        ];

        if (rt > l && b > t) {
          const dx = this.tx - this.x;
          const dy = this.ty - this.y;
          const dist = Math.hypot(dx, dy) || 1;

          // Pick a new target once close, or occasionally mid-flight
          if (dist < 40 || Math.random() < 0.004) {
            this.tx = l + Math.random() * (rt - l);
            this.ty = t + Math.random() * (b - t);
          }

          this.vx += (dx / dist) * this.accel * dist;
          this.vy += (dy / dist) * this.accel * dist;

          this.vx *= this.friction;
          this.vy *= this.friction;

          const speed = Math.hypot(this.vx, this.vy);
          if (speed > this.maxSpeed) {
            this.vx = (this.vx / speed) * this.maxSpeed;
            this.vy = (this.vy / speed) * this.maxSpeed;
          }
          // Keep a minimum cruising speed so it never fully stalls
          else if (speed < this.maxSpeed * 0.3) {
            const boost = (this.maxSpeed * 0.3) / (speed || 1);
            this.vx *= boost;
            this.vy *= boost;
          }

          this.x += this.vx;
          this.y += this.vy;

          if (this.x < l || this.x > rt) {
            this.x = Math.max(l, Math.min(rt, this.x));
            this.vx *= -0.3;
          }
          if (this.y < t || this.y > b) {
            this.y = Math.max(t, Math.min(b, this.y));
            this.vy *= -0.3;
          }

          this.listeners.forEach((fn) => fn({ x: this.x, y: this.y }));
        }
      }
    }
    requestAnimationFrame(this.step);
  };
}

export const phantomMouse = new phantomMouseController();
export const isTouchDevice = () => isTouch;
