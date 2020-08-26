const sparks = document.querySelectorAll('g');

sparks.forEach((spark, i) => {
    const delay = i % 2 ? `${i / 3}s` : `${i / 2}s`

    const line = spark.querySelector('rect');
    line.style.animationDelay = delay

    const dot = spark.querySelector('circle');
    dot.style.animationDelay = delay
})

