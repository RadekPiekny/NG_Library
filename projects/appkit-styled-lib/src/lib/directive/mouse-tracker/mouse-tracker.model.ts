import { ElementRef } from "@angular/core";

export interface MouseTrackerMouseStart {
    event: MouseEvent,
    host: ElementRef,
    xPositionHostClick: number
}

export interface MouseTrackerMouseMove {
    event: MouseEvent,
    host: DOMRect | undefined,
    initialMouseDown: MouseEvent | undefined
}