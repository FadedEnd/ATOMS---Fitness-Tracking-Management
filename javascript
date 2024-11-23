document.getElementById('workout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const workoutName = document.getElementById('workout-name').value;
    const caloriesBurned = document.getElementById('calories-burned').value;

    fetch('/api/workouts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: workoutName, calories: caloriesBurned })
    })
    .then(response => {
        if (response.ok) {
            alert('Workout added successfully!');
            // Optionally refresh the workout list here
        }
    })
    .catch(error => console.error('Error:', error));
});
