# Variables
CXX = g++
CXXFLAGS = -std=c++11 -pthread
TARGETS = escritores-lectores prodconsMultiple fumadores
SOURCES = escritores-lectores.cpp prodconsMultiple.cpp fumadores.cpp scd.cpp

# Regla principal
all: $(TARGETS)

# Regla para escritores-lectores
escritores-lectores: escritores-lectores.cpp scd.cpp
	$(CXX) $(CXXFLAGS) -o $@ escritores-lectores.cpp scd.cpp

# Regla para prodconsMultiple
prodconsMultiple: prodconsMultiple.cpp scd.cpp
	$(CXX) $(CXXFLAGS) -o $@ prodconsMultiple.cpp scd.cpp

# Regla para fumadores
fumadores: fumadores.cpp scd.cpp
	$(CXX) $(CXXFLAGS) -o $@ fumadores.cpp scd.cpp

# Limpieza de archivos binarios
clean:
	rm -f $(TARGETS)
