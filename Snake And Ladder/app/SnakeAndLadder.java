import java.util.Scanner;

import snake.*;
import ladder.*;
import player.Player;
import board.Board;
import dice.Roll;

public class SnakeAndLadder {
    private static int getFinalPosition(int position, int diceValue, SnakeSuite snake, LadderSuite ladder,
            Board board) {
        int finalPosition = position + diceValue;
        if (board.isBeyondSize(finalPosition))
            return position;
        finalPosition = snake.getNewSnakePosition(finalPosition);
        finalPosition = ladder.getNewLadderPosition(finalPosition);
        return finalPosition;
    }

    public static void main(String args[]) {

        int BOARD_SIZE = 100;
        int NUMBER_OF_DICE = 1;
        int NUMBER_OF_FACES_IN_DICE = 6;

        try (Scanner input = new Scanner(System.in)) {
            Board board = new Board(BOARD_SIZE);

            int numberOfSnakes, numberOfLadders, numberOfPlayers;
            int head, tail, start, end;

            numberOfSnakes = input.nextInt();
            Snake snakes[] = new Snake[numberOfSnakes];

            for (int i = 0; i < numberOfSnakes; i++) {
                head = input.nextInt();
                tail = input.nextInt();
                snakes[i] = new Snake(head, tail);
            }

            numberOfLadders = input.nextInt();
            Ladder ladders[] = new Ladder[numberOfLadders];

            for (int i = 0; i < numberOfLadders; i++) {
                start = input.nextInt();
                end = input.nextInt();
                ladders[i] = new Ladder(start, end);
            }

            numberOfPlayers = input.nextInt();
            Player players[] = new Player[numberOfPlayers];

            for (int i = 0; i < numberOfPlayers; i++) {
                String playerName = input.next();
                players[i] = new Player(playerName, 0);
            }

            SnakeSuite snakeSuite = new SnakeSuite(numberOfSnakes, snakes);
            LadderSuite ladderSuite = new LadderSuite(numberOfLadders, ladders);

            boolean isMatchFinished = false;

            while (!isMatchFinished) {
                for (int i = 0; i < numberOfPlayers; i++) {
                    Roll roll = new Roll(NUMBER_OF_DICE, NUMBER_OF_FACES_IN_DICE);
                    String playerName = players[i].getPlayerName();
                    int diceValue = roll.roll();
                    int initialPosition = players[i].getPlayerPosition();
                    int finalPosition = getFinalPosition(initialPosition, diceValue, snakeSuite, ladderSuite, board);
                    players[i].setPlayerPosition(finalPosition);

                    System.out.printf("%s rolled a %d and moved from %d to %d\n", playerName, diceValue,
                            initialPosition, finalPosition);

                    if (board.isWinningPosition(finalPosition)) {
                        System.out.printf("%s wins the game\n", playerName);
                        isMatchFinished = true;
                        break;
                    }
                }
            }
        }
    }
}