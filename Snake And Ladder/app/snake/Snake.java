package snake;

public class Snake {
    private int head;
    private int tail;

    public Snake(int head, int tail) {
        this.head = head;
        this.tail = tail;
    }

    public void setHeadPosition(int position) {
        this.head = position;
    }

    public int getHeadPosition() {
        return this.head;
    }

    public void setTailPosition(int position) {
        this.tail = position;
    }

    public int getTailPosition() {
        return this.tail;
    }
}