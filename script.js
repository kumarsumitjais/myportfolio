document.querySelectorAll('.circular-progress').forEach(progress => {
    const percentage = progress.getAttribute('data-percentage'); // Get the percentage value
    const fill = progress.querySelector('.mask.full .fill'); // Select the fill element
    const rotation = (360 * percentage) / 100; // Calculate the rotation angle
    fill.style.transform = `rotate(${rotation}deg)`; // Apply the rotation
});