package ladder;

public class LadderSuite {
    private int numberOfLadders;
    private Ladder ladders[];

    private boolean isLadderExists(Ladder ladder, int position) {
        return ladder.getStartPosition() == position;
    }

    public LadderSuite(int numberOfLadders, Ladder ladders[]) {
        this.numberOfLadders = numberOfLadders;
        this.ladders = ladders;
    }

    public int getNewLadderPosition(int position) {
        for (int i = 0; i < numberOfLadders; i++) {
            if (isLadderExists(this.ladders[i], position))
                return this.ladders[i].getEndPosition();
        }
        return position;
    }
}
