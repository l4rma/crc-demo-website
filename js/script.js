async function fetchViews() {
    try {
        const res  = await fetch('https://z5iadfawoi.execute-api.eu-west-1.amazonaws.com/counter/views');
        const viewsJson = await res.json();
        const views = viewsJson.views;
        const text = `Visitors: ${views}`;

        document.getElementById('visitors').textContent = text;
    } catch (err) {
        console.error(err);
        document.getElementById('visitors').textContent = 'Visitors: (unavailable)';
    }
}

document.addEventListener('DOMContentLoaded', fetchViews);
