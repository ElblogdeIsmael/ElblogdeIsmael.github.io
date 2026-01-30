# ==========================
# Makefile general raíz
# ==========================

SUBJECTS = MC DDSI DO-1 CG IG EM

.PHONY: all clean $(SUBJECTS) $(addprefix clean-,$(SUBJECTS))

# Compilar todas las asignaturas
all: $(SUBJECTS)

# Compilar una asignatura específica (ej: make MC)
$(SUBJECTS):
	@echo "=== Compilando $@ ==="
	@$(MAKE) -C $@ all

# Limpiar todo
clean:
	@echo "=== Limpiando todo ==="
	@for subj in $(SUBJECTS); do \
		$(MAKE) -C $$subj clean; \
	done
	@echo "=== Eliminando archivos _minted* ==="
	@find . -type d -name '_minted*' -exec rm -rf {} +

# Limpiar una asignatura específica (ej: make clean-MC)
clean-%:
	@echo "=== Limpiando $* ==="
	@$(MAKE) -C $* clean

clean-all:
	@echo "=== Limpiando todo ==="
	@for subj in $(SUBJECTS); do \
		$(MAKE) -C $$subj clean-all; \
	done


