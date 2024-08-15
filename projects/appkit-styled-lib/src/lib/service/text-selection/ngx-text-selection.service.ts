import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxTextSelectionService {
  selection: Selection;
  private selectionStartOffset: number;
  private selectionEndOffset: number;
  private selectionStartNode: Node;
  private selectionEndNode: Node;
  private clonedRange: Range;
  editedElement: HTMLElement;
  lastClickEvent: PointerEvent;

  saveSelection(): void {
    console.log('saving selection');
    this.selection = window.getSelection();
    this.clonedRange = this.selection.getRangeAt(0).cloneRange();
    if (this.selection.rangeCount === 1) {
    }
    this.selectionStartNode = this.selection.getRangeAt(0).startContainer;
    this.selectionEndNode = this.selection.getRangeAt(0).endContainer;
    this.selectionStartOffset = this.selection.getRangeAt(0).startOffset;
    this.selectionEndOffset = this.selection.getRangeAt(0).endOffset;
  }

  restoreSelection(editedElement: HTMLElement = this.editedElement): void {
    //editedElement.focus();
    this.selection.setBaseAndExtent(
      this.selectionStartNode,
      this.selectionStartOffset,
      this.selectionEndNode,
      this.selectionEndOffset
    );
  }

  restoreSelectionQ() {
    const selection = window.getSelection();
    const range = new Range();
    const qqq: any = this.lastClickEvent.target;

    //range.setStart(this.editedElement.firstChild, this.selectionStartOffset);
    //range.setEnd(this.editedElement.firstChild, this.selectionEndOffset);

    range.setStart(qqq.childNodes[0], this.selectionStartOffset);
    range.setEnd(qqq.childNodes[0], this.selectionEndOffset);
    selection.removeAllRanges();

    setTimeout(() => {
      selection.addRange(range);
    });
  }

  caretToLastPosition(el: HTMLDivElement) {
    const range = document.createRange();
    const sel = window.getSelection();
    let lastRange: any = el.childNodes[el.childNodes.length - 1];
    while (lastRange.childNodes.length > 0) {
      lastRange = lastRange.childNodes[lastRange.childNodes.length - 1];
    }
    range.setStart(lastRange, lastRange.data.length);
    range.collapse(true);

    sel.removeAllRanges();
    sel.addRange(range);
  }
}
