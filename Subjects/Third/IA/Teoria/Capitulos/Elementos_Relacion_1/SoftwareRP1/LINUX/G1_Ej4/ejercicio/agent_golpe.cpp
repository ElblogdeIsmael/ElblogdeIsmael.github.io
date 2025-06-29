#include "agent_golpe.h"
#include "environment.h"
#include <iostream>
#include <cstdlib>
#include <vector>
#include <utility>

using namespace std;

// -----------------------------------------------------------
Agent::ActionType Agent::Think()
{
	int accion = 0;
	
	/* ESCRIBA AQUI SUS REGLAS */

	return static_cast<ActionType> (accion);

}
// -----------------------------------------------------------
void Agent::Perceive(const Environment &env)
{
	RobotX_ = env.AgentPosX();
	RobotY_ = env.AgentPosY();
}
// -----------------------------------------------------------
string ActionStr(Agent::ActionType accion)
{
	switch (accion)
	{
	case Agent::actFORWARD: return "FORWARD";
	case Agent::actTURN: return "TURN";
	case Agent::actIDLE: return "IDLE";
	default: return "???";
	}
}
