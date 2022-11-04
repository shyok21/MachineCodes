package ladder;

public class Ladder {
    private int start;
    private int end;

    public Ladder(int start, int end) {
        this.start = start;
        this.end = end;
    }

    public void setStartPosition(int position) {
        this.start = position;
    }

    public int getStartPosition() {
        return this.start;
    }

    public void setEndPosition(int position) {
        this.end = position;
    }

    public int getEndPosition() {
        return this.end;
    }
}