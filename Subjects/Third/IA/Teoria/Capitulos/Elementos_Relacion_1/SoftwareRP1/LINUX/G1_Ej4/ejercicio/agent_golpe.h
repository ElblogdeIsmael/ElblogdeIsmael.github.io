#ifndef AGENT__
#define AGENT__

#include <string>
#include <iostream>
using namespace std;

// -----------------------------------------------------------
//				class Agent
// -----------------------------------------------------------
class Environment;
class Agent
{
public:
	Agent(int x, int y){
		RobotX_ = 0;
		RobotY_ = 0;
		OldRobotX_ = -1;
		OldRobotY_ = -1;
		ObjX_ = x;
		ObjY_ = y;
		Orientacion_ = -1;
		
		for (int i = 0; i < 10; ++i)
			for (int j = 0; j < 10; ++j)
				m[i][j] = 0;
	}

	enum ActionType
	{
	    actFORWARD,
	    actTURN,
	    actIDLE
	};

	void Perceive(const Environment &env);
	ActionType Think();

private:
	int RobotX_, RobotY_, ObjX_, ObjY_, OldRobotX_, OldRobotY_, Orientacion_;
	
	int m[10][10];
};

string ActionStr(Agent::ActionType);

#endif
