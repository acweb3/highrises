/**
 * @see {https://developers.google.com/maps/documentation/javascript/examples/overlay-popup#maps_overlay_popup-javascript}
 */
export class Popup extends window.google.maps.OverlayView {
    position;
    containerDiv;
    onClick;

    constructor(position, content, index, onClick) {
        super();
        this.position = position;
        this.onClick = onClick;

        content.classList.add('popup-bubble');
        content.innerHTML = index;
        content.addEventListener('click', onClick);

        // This zero-height div is positioned at the bottom of the bubble.
        const bubbleAnchor = document.createElement('div');

        bubbleAnchor.classList.add('popup-bubble-anchor');
        bubbleAnchor.appendChild(content);
        // This zero-height div is positioned at the bottom of the tip.
        this.containerDiv = document.createElement('div');
        this.containerDiv.classList.add('popup-container');
        this.containerDiv.appendChild(bubbleAnchor);
    }
    /** Called when the popup is added to the map. */
    onAdd() {
        this.getPanes().floatPane.appendChild(this.containerDiv);
    }
    /** Called when the popup is removed from the map. */
    onRemove() {
        if (this.containerDiv.parentElement) {
            [...this.containerDiv.parentElement.children].forEach((child) =>
                this.containerDiv.parentElement?.removeChild(child)
            );
        }
    }
    /** Called each frame when the popup needs to draw itself. */
    draw() {
        const divPosition = this.getProjection().fromLatLngToDivPixel(
            this.position
        );
        // Hide the popup when it is far out of view.
        const display =
            Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
                ? 'block'
                : 'none';

        if (display === 'block') {
            this.containerDiv.style.left = divPosition.x + 'px';
            this.containerDiv.style.top = divPosition.y + 'px';
        }

        if (this.containerDiv.style.display !== display) {
            this.containerDiv.style.display = display;
        }
    }
}
