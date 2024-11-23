import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/workouts")
public class WorkoutResource {
    FitnessTracker tracker = new FitnessTracker();

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addWorkout(Workout workout) {
        tracker.addWorkout(workout.getName(), workout.getCalories());
        return Response.status(Response.Status.CREATED).build();
    }
}
