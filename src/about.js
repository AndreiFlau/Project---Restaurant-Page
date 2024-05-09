export default function about() {
    const div = document.createElement("div");
    div.innerHTML = `
    <h1 id="contact">Contact Us</h1>
    <div class="john">
    <h2>John Doe</h2>
    <p>Ceo</p>
    <p>Phone Number: 123-456-789</p>
    </div>
    
    <div class="mario">
    <h2>Mario</h2>
    <p>Plumber</p>
    <p>Phone Number: 000-000-000</p>
    </div>
    
    <div class="x01">
    <h2>Waitress-X01</h2>
    <p>Robot Waitress</p>
    <p>Doesn't have a phone number</p></div>`;

    return div;
}

{/* <h1>Contact Us</h1>;
<h2>John Doe</h2>
<p>Ceo</p>
<p>Phone Number: 123-456-789</p>;

<h2>Mario</h2>
<p>Plumber</p>
<p>Phone Number: 000-000-000</p>;

<h2>Waitress-X01</h2>
<p>Robot Waitress</p>
<p>Doesn't have a phone number</p>; */}