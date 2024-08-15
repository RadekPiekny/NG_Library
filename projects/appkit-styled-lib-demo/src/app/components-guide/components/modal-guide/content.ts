export const modalContentTerms =  `<div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
\t\t\t\t<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
\t\t\t\t    Terms of Service
\t\t\t\t</h3>
\t\t\t\t<button type="button" (click)="showModal = false" class="text-gray-400 bg-transparent hover:bg-gray-200 w-10 h-10 hover:text-gray-900 rounded text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-neutral-100/5 dark:hover:text-white" data-modal-hide="defaultModal">
\t\t\t\t    <span class="Appkit4-icon icon-close-outline m-auto"></span>
\t\t\t\t    <span class="sr-only" >Close modal</span>
\t\t\t\t</button>
\t\t\t</div>
\t\t\t<!-- Modal body -->
\t\t\t<div class="p-6 space-y-6">
\t\t\t\t<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
\t\t\t\t    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
\t\t\t\t</p>
\t\t\t\t<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
\t\t\t\t    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
\t\t\t\t</p>
\t\t\t</div>
\t\t\t<!-- Modal footer -->
\t\t\t<div class="flex justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
\t\t\t\t<button class="rounded text-base leading-6 cursor-pointer flex justify-center relative tracking-normal px-4 py-1 dark:text-primary-lighten-200 text-primary hover:bg-primary/20">Decline</button>
\t\t\t\t<button class="rounded text-base leading-6 cursor-pointer flex justify-center relative tracking-normal px-4 py-1 bg-primary hover:bg-primary-lighten-100">I accept</button>
\t\t\t</div>`

export const modalContentEmpty = `<div class="p-4 text-center">modal content</div>`