
name=ikkeErik

run_old:
	@echo "hello $(name)"

run:
	@if [ "$(name)" = "Erik" ]; then \
    	echo "Erik? ive been looking for you"; \
	else \
		echo "Hello $(name)"; \
	fi


