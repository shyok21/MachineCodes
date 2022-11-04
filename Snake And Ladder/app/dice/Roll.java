package dice;

public class Roll {
    private int numberOfDice;
    private Dice dice[];

    public Roll(int numberOfDice, int numberOfSides) {
        this.numberOfDice = numberOfDice;
        dice = new Dice[numberOfDice];
        for (int i = 0; i < this.numberOfDice; i++)
            this.dice[i] = new Dice(numberOfSides);
    }

    public int roll() {
        int rollValue = 0;
        for (int i = 0; i < this.numberOfDice; i++) {
            rollValue = rollValue + this.dice[i].roll();
        }
        return rollValue;
    }
}
