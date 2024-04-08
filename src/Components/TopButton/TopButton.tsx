import React from "react";
import "./TopButton.css";

/**
 * TopButton component.
 *
 * A button that appears when the user scrolls down 30px from the top of the document.
 * When the user clicks on the button, the user is taken to the top of the document.
 */
export default function TopButton() {

    /**
     * Scrolls to the top of the document.
     */
    function GoUpEvent() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    /**
     * When the user scrolls down 30px from the top of the document, show the button
     * When the user clicks on the button, scroll to the top of the document
     */
    function scrollFunction() {
        const topButton = document.getElementById("topButton");
        if (topButton === null) return;
        topButton.style.visibility = (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)
            ? "visible"
            : "hidden";
    }

    window.onscroll = scrollFunction;

    return (
        <div
            onClick={GoUpEvent}
            title="Go up"
        >
            <i className="fa-solid fa-arrow-up fa-fade" id="topButton"/>
        </div>
    );
}
