# ==========================
# Makefile general raíz
# ==========================

# Every subject that has a Makefile. OE is out because it has no source of its
# own, only practicals and tests.
#
# Careful with CG, DO-1, EM and MC: their Makefile writes build/<CODE>.pdf from
# src/*.md, but the site publishes TEX/<CODE>.pdf, which is written by hand and
# is the longer document. Building them here does not touch what is published.
SUBJECTS = AA AEF CG DDSI DO-1 DRH1 EE EM IG MAC MC

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


