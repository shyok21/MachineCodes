package player;

public class Player {
    private String name;
    private int position;

    public Player(String name, int position) {
        this.name = name;
        this.position = position;
    }

    public void setPlayerName(String name) {
        this.name = name;
    }

    public String getPlayerName() {
        return this.name;
    }

    public void setPlayerPosition(int position) {
        this.position = position;
    }

    public int getPlayerPosition() {
        return this.position;
    }
}