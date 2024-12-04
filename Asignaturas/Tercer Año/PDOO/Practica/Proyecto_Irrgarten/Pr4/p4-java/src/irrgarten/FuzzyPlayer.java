/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package irrgarten;
import java.util.ArrayList;

/**
 *
 * @author ismael
 */
public class FuzzyPlayer extends Player{
    public FuzzyPlayer(Player other){
        super(other);
    }

    
    @Override
    public Directions move(Directions direction, ArrayList<Directions> validMoves){
        Directions preference = super.move(direction, validMoves);
        Directions d = Dice.nextStep(preference, validMoves, this.getIntelligence());
        return d;
    }
    
    @Override
    public float attack(){
        return(Dice.intensity(getStrength())+sumWeapons());
    }
    
    @Override
    protected float defensiveEnergy(){
        return(Dice.intensity(getIntelligence()) + sumShields());
    }
    
    @Override
    public String toString(){
         String out = "Fuzzy";
         return out+super.toString();
    }
    
    
    
    

    
    
}
