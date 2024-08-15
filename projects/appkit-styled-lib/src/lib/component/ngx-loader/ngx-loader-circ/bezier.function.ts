export function easeInOutCubic(t: number): number {
    // Cubic Bezier curve points
    const p0 = 0;
    const p1 = 0.33;
    const p2 = 0.74;
    const p3 = 1;
  
    // Calculate the interpolated value along the curve using cubic Bezier equation
    return (
      (1 - t) ** 3 * p0 +
      3 * (1 - t) ** 2 * t * p1 +
      3 * (1 - t) * t ** 2 * p2 +
      t ** 3 * p3
    );
}