package dice;
import java.lang.Math;

public class Dice {
    private int numberOfSides;

    public Dice(int numberOfSides) {
        this.numberOfSides = numberOfSides;
    }

    public int roll() {
        return (int)Math.ceil(Math.random()*numberOfSides);
    }

}
