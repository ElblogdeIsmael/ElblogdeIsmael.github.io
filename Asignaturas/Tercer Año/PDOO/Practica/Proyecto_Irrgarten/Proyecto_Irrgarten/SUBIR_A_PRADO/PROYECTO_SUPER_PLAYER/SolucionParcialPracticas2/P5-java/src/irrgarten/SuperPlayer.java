/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package irrgarten;

/**
 *
 * @author ismael
 */
public class SuperPlayer extends Player{
    public SuperPlayer(Player other){
        super(other);
    }
    
    @Override
    public float attack() {
        return (getStrength() + sumWeapons())*getIntelligence();
    }
    
    @Override
    public String toString() {
        String out = "[Soy Super]";
        return out + super.toString();
    }
    
    
}
