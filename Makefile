ifeq ("$(ELM)","")
	ELM=elm
endif

ifeq ("$(ELMLIVE)", "")
	ELMLIVE=elm-live
endif

ifeq ("$(UGLIFYJS)", "")
	UGLIFYJS=uglifyjs
endif

BUILD_DIR=js

all: dev

dev: js/main.js

release: js/main.min.js

js/main.js: src/**
	$(ELM) make src/Examples/Embed.elm --output $(BUILD_DIR)/main.js

js/main.min.js: js/main.tmp.js
	@$(UGLIFYJS) $(BUILD_DIR)/main.tmp.js --compress 'pure_funcs="F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9",pure_getters,keep_fargs=false,unsafe_comps,unsafe' | uglifyjs --mangle > $(BUILD_DIR)/main.min.js

js/main.tmp.js: src/**
	@$(ELM) make src/Main.elm --optimize --output $(BUILD_DIR)/main.tmp.js

watch:
	@$(ELMLIVE) src/Examples/Embed.elm -p 7000 -d . -- --output $(BUILD_DIR)/main.js

clean:
	@rm -rf $(BUILD_DIR)/{main.js,main.min.js}

