package snake;

public class SnakeSuite {
    private int numberOfSnakes;
    private Snake snakes[];

    private boolean isSnakeExists(Snake snake, int position) {
        return snake.getHeadPosition() == position;
    }

    public SnakeSuite(int numberOfSnakes, Snake snakes[]) {
        this.numberOfSnakes = numberOfSnakes;
        this.snakes = snakes;
    }

    public int getNewSnakePosition(int position) {
        for (int i = 0; i < numberOfSnakes; i++) {
            if (this.isSnakeExists(this.snakes[i], position))
                return this.snakes[i].getTailPosition();
        }
        return position;
    }
}
