import sys
import heapq

class Puzzle8:
    def __init__(self, start_state):
        self.start_state = start_state
        self.goal_state = "123456780"
        self.moves = {
            0: [1, 3], 1: [0, 2, 4], 2: [1, 5],
            3: [0, 4, 6], 4: [1, 3, 5, 7], 5: [2, 4, 8],
            6: [3, 7], 7: [4, 6, 8], 8: [5, 7]
        }

    def heuristic(self, state):
        distance = 0
        for i, val in enumerate(state):
            if val != '0':
                goal_index = self.goal_state.index(val)
                distance += abs(i // 3 - goal_index // 3) + abs(i % 3 - goal_index % 3)
        return distance

    def get_neighbors(self, state):
        zero_index = state.index("0")
        neighbors = []
        for move in self.moves[zero_index]:
            new_state = list(state)
            new_state[zero_index], new_state[move] = new_state[move], new_state[zero_index]
            neighbors.append("".join(new_state))
        return neighbors

    def solve(self):
        priority_queue = [(self.heuristic(self.start_state), 0, self.start_state, [])]
        visited = set()
        
        while priority_queue:
            _, cost, state, path = heapq.heappop(priority_queue)
            
            if state == self.goal_state:
                return path + [state]
            
            if state in visited:
                continue
            visited.add(state)
            
            for neighbor in self.get_neighbors(state):
                heapq.heappush(priority_queue, (cost + self.heuristic(neighbor), cost + 1, neighbor, path + [state]))
        
        return None

    def print_solution(self, solution):
        if not solution:
            print("No hay solución para este estado inicial.")
            return
        
        print("Solución encontrada:")
        for state in solution:
            for i in range(0, 9, 3):
                print(state[i:i+3])
            print("-")

if __name__ == "__main__":
    if len(sys.argv) != 2 or len(sys.argv[1]) != 9 or not sys.argv[1].isdigit():
        print("Uso: python solve_8puzzle.py <estado_inicial>")
        sys.exit(1)
    
    start_state = sys.argv[1]
    puzzle = Puzzle8(start_state)
    solution = puzzle.solve()
    puzzle.print_solution(solution)
