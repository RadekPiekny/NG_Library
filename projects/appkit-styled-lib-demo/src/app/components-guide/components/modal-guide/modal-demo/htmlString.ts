export const modalDemoHTML = (content: string) => `<button (click)="showModal = true" class="rounded text-base leading-6 cursor-pointer flex justify-center relative tracking-normal px-4 py-1 bg-primary hover:bg-primary-lighten-100">Show Modal</button>

<div *ngIf="showModal" class="fixed flex items-center justify-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-neutral-900/20" (click)="showModal = false">
    <div class="relative max-w-2xl">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700" (click)="$event.stopPropagation()">
            <!-- Modal header -->
            ${content}
        </div>
    </div>
</div>`