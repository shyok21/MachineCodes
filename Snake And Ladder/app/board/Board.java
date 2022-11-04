package board;

public class Board {
    private int size;

    public Board(int size) {
        this.size = size;
    }

    public int getBoardSize() {
        return this.size;
    }

    public void setBoardSize(int size) {
        this.size = size;
    }

    public boolean isBeyondSize(int position) {
        return position > this.size;
    }

    public boolean isWinningPosition(int position) {
        return position == this.size;
    }
}
