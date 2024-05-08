export default function footer() {
    const div = document.createElement("div");
    const footer = document.createElement("footer");
    const p1 = document.createElement("p");
    const a1 = document.createElement("a");
    a1.href = "https://www.flaticon.com/free-icons/coconut";
    a1.title = "coconut icons";
    a1.textContent = "Coconut icons created by designbydai - Flaticon";
    p1.appendChild(a1);
    const p2a2 = document.createElement("p");
    const p2a2Content = `
    Photo by <a
        href="https://unsplash.com/@kenrickmills?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kenrick
        Mills</a> on <a
        href="https://unsplash.com/photos/green-coconut-trees-qPsAJhHVbvM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;

    p2a2.innerHTML = p2a2Content;

    footer.appendChild(p1);
    footer.appendChild(p2a2);
    div.appendChild(footer);

    return div;
}

{/* <footer>
<p>
    <a href="https://www.flaticon.com/free-icons/coconut" title="coconut icons">Coconut icons created by
        designbydai - Flaticon</a>
</p>
<p>
    Photo by <a
        href="https://unsplash.com/@kenrickmills?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kenrick
        Mills</a> on <a
        href="https://unsplash.com/photos/green-coconut-trees-qPsAJhHVbvM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
</p>
</footer> */}