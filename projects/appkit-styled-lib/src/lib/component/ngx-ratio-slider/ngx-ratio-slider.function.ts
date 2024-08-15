import { forIn } from "lodash";

export function findClosestDivisibleNumber(number: number, divisor: number): number {
    const remainder = number % divisor;
  
    if (remainder === 0) {
      // The number is already divisible by the divisor.
      return number;
    }
  
    const lowerClosest = number - remainder;
    const upperClosest = lowerClosest + divisor;
  
    // Check which of the two options is closer to the initial number.
    if (Math.abs(number - lowerClosest) <= Math.abs(number - upperClosest)) {
      return lowerClosest;
    } else {
      return upperClosest;
    }
}

export function countDecimalPlaces(number: number): number {
    const decimalString = number.toString().split('.')[1];
    if (decimalString) {
      return decimalString.length;
    } else {
      return 0;
    }
}

export function roundToDecimalPlaces(number: number, decimalPlaces: number): number {
    const multiplier = Math.pow(10, decimalPlaces);
    return Math.round(number * multiplier) / multiplier;
}

export function calculateStepBorders(min: number, max: number, step: number, containerWidth: number): number[] {
    const stepCount = (max - min) / step;
    const segments: number[] = [];
    const segmentWidth = containerWidth / stepCount;
    for (let index = 0; index <= stepCount; index++) {
        const divisionPoint = index * segmentWidth;
        segments.push(divisionPoint);
    }    
    return segments;
}

export function findStepSegmentIndex(stepSegments: number[], pxPosition: number): number | undefined {
    let closestIndex;
    let abs = stepSegments[stepSegments.length - 1];
    for (const [i, segment] of stepSegments.entries()) {
        const thisAbs = Math.abs(pxPosition - segment);
        if (thisAbs < abs) {
            abs = thisAbs;
            closestIndex = i;
        }
    }
    return closestIndex

}

export function getStepPxPosition(step: number, stepSegments: number[],) {
    if (stepSegments.length === 0) {
        return null;
      }
    
      let closest = stepSegments[0];
      let minDiff = Math.abs(step - stepSegments[0]);
    
      for (let i = 1; i < stepSegments.length; i++) {
        if (minDiff === 0) {
          // If the minimum difference is 0, we've found an exact match, so we can stop early.
          return closest;
        }
    
        const diff = Math.abs(step - stepSegments[i]);
        if (diff < minDiff) {
          minDiff = diff;
          closest = stepSegments[i];
        }
      }
    
      return closest;
}

export function findDividers(min: number, max: number): [number, number] {
  const smallerDivider = findDivider(max,max/20);
  const highDivider = findDivider(max,max/10);
  return [smallerDivider, highDivider];
}

function findDivider(number: number, size: number = 2): number {
    // Ensure the input number is at least 3
    number = Math.max(size, number);
  
    for (let divider = size; divider <= number; divider++) {
      if (number % divider === 0) {
        return divider;
      }
    }
  
    return 0; // No divisor found
}