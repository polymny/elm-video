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

dev: dist/polymny-video-elm.js dist/polymny-video-full.js
release: dist/polymny-video-elm.min.js dist/polymny-video-full.min.js

js/main.js: src/**
	$(ELM) make src/Main/*.elm --output $(BUILD_DIR)/main.js

js/main.min.js: js/main.tmp.js
	@$(UGLIFYJS) $(BUILD_DIR)/main.tmp.js --compress 'pure_funcs="F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9",pure_getters,keep_fargs=false,unsafe_comps,unsafe' | $(UGLIFYJS) --mangle > $(BUILD_DIR)/main.min.js

js/main.tmp.js: src/**
	@$(ELM) make src/Main/*.elm --optimize --output $(BUILD_DIR)/main.tmp.js

clean:
	@rm -rf $(BUILD_DIR)/{main.js,main.min.js}


dist/polymny-video-full.min.js: js/main.min.js js/ports.js
	@mkdir -p dist
	@curl https://cdn.jsdelivr.net/npm/hls.js@latest > dist/polymny-video-full.min.js 2>/dev/null
	@echo >> dist/polymny-video-full.min.js
	@cat js/main.min.js >> dist/polymny-video-full.min.js
	@uglifyjs js/ports.js >> dist/polymny-video-full.min.js

dist/polymny-video-elm.min.js: js/main.min.js js/ports.js
	@ mkdir -p dist
	@curl https://cdn.jsdelivr.net/npm/hls.js@latest > dist/polymny-video-elm.min.js 2>/dev/null
	@echo >> dist/polymny-video-elm.min.js
	@uglifyjs js/ports.js >> dist/polymny-video-elm.min.js


dist/polymny-video-full.js: js/main.js js/ports.js
	@mkdir -p dist
	@curl https://cdn.jsdelivr.net/npm/hls.js@latest > dist/polymny-video-full.js 2>/dev/null
	@echo >> dist/polymny-video-full.js
	@cat js/main.js >> dist/polymny-video-full.js
	@cat js/ports.js >> dist/polymny-video-full.js

dist/polymny-video-elm.js: js/main.js js/ports.js
	@mkdir -p dist
	@curl https://cdn.jsdelivr.net/npm/hls.js@latest > dist/polymny-video-elm.js 2>/dev/null
	@echo >> dist/polymny-video-elm.js
	@cat js/ports.js >> dist/polymny-video-elm.js
