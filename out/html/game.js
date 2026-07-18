(function() {
  var game;
  var ui;

  var DateOptions = {hour: 'numeric',
                 minute: 'numeric',
                 second: 'numeric',
                 year: 'numeric',
                 month: 'short',
                 day: 'numeric' };

  var main = function(dendryUI) {
    ui = dendryUI;
    game = ui.game;

    // Add your custom code here.
  };

  var TITLE = "Beeshana Kalaya: An Alternate History" + '_' + "Communist45";

  // the url is a link to game.json
  // test url: https://aucchen.github.io/social_democracy_mods/v0.1.json
  // TODO; 
  window.loadMod = function(url) {
      ui.loadGame(url);
  };

  window.showStats = function() {
    if (window.dendryUI.dendryEngine.state.sceneId.startsWith('library')) {
        window.dendryUI.dendryEngine.goToScene('election_simulation');
    } else {
        window.dendryUI.dendryEngine.goToScene('library');
    }
  };

  window.showMods = function() {
    window.hideOptions();
    if (window.dendryUI.dendryEngine.state.sceneId.startsWith('mod_loader')) {
        window.dendryUI.dendryEngine.goToScene('backSpecialScene');
    } else {
        window.dendryUI.dendryEngine.goToScene('mod_loader');
    }
  };
  
  window.showOptions = function() {
      var save_element = document.getElementById('options');
      window.populateOptions();
      save_element.style.display = "block";
      if (!save_element.onclick) {
          save_element.onclick = function(evt) {
              var target = evt.target;
              var save_element = document.getElementById('options');
              if (target == save_element) {
                  window.hideOptions();
              }
          };
      }
  };

  window.hideOptions = function() {
      var save_element = document.getElementById('options');
      save_element.style.display = "none";
  };

  window.disableBg = function() {
      window.dendryUI.disable_bg = true;
      document.body.style.backgroundImage = 'none';
      window.dendryUI.saveSettings();
  };

  window.enableBg = function() {
      window.dendryUI.disable_bg = false;
      window.dendryUI.setBg(window.dendryUI.dendryEngine.state.bg);
      window.dendryUI.saveSettings();
  };

  window.disableAnimate = function() {
      window.dendryUI.animate = false;
      window.dendryUI.saveSettings();
  };

  window.enableAnimate = function() {
      window.dendryUI.animate = true;
      window.dendryUI.saveSettings();
  };

  window.disableAnimateBg = function() {
      window.dendryUI.animate_bg = false;
      window.dendryUI.saveSettings();
  };

  window.enableAnimateBg = function() {
      window.dendryUI.animate_bg = true;
      window.dendryUI.saveSettings();
  };


  // Custom Audio Manager curtosy of Puddle on discord
  window.AudioManager = (function() {
    var layers = {
        outside: {
            playlist: [
                'special_music/Yadamin_Banda.mp3',
            ],
            currentIndex: 0,
            audio: null,
            volume: 1.0,
            enabled: true
        },
        inside: {
            playlist: [
                'music/basic/Siu_Digin_Galana_Andure.mp3',
            ],
            currentIndex: 0,
            audio: null,
            volume: 1.0,
            enabled: true
        },
        sfx: {
            playlist: [],
            currentIndex: 0,
            audio: null,
            volume: 0.6,
            enabled: true
        }
    };

    var muted = false;
    var started = false;

    function shuffle(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
        }
    }

    function playLayer(layerName) {
            var layer = layers[layerName];
            if (!layer || !layer.enabled || layer.playlist.length === 0) return;
            var targetVol = muted ? 0 : layer.volume;

            if (layer.audio) {
                var old = layer.audio;
                old.onended = null;
                var fadeOut = setInterval(function() {
                    if (old.volume > 0.05) {
                        old.volume = Math.max(0, old.volume - 0.05);
                    } else {
                        old.pause();
                        clearInterval(fadeOut);
                    }
                }, 50);
            }

            setTimeout(function() {
                var newAudio = new Audio(layer.playlist[layer.currentIndex]);
                layer.audio = newAudio;
                newAudio.volume = 0;
                newAudio.play().catch(function() {});
                var fadeIn = setInterval(function() {
                    if (newAudio.volume < targetVol - 0.05) {
                        newAudio.volume = Math.min(targetVol, newAudio.volume + 0.05);
                    } else {
                        newAudio.volume = targetVol;
                        clearInterval(fadeIn);
                    }
                }, 50);
                newAudio.onended = function() {
                    layer.currentIndex = (layer.currentIndex + 1) % layer.playlist.length;
                    playLayer(layerName);
                };
            }, 800);
    }

    function stopLayer(layerName) {
        var layer = layers[layerName];
        if (layer && layer.audio) {
            layer.audio.pause();
            layer.audio = null;
        }
    }

    return {
        started: false,

        init: function() {
        },

        start: function() {
            this.started = true;
        },

        mute: function() {
            muted = true;
            for (var name in layers) {
                if (layers[name].audio) layers[name].audio.pause();
            }
        },

        unmute: function() {
            muted = false;
            for (var name in layers) {
                if (layers[name].audio) layers[name].audio.play().catch(function() {});
            }
        },

        isMuted: function() { return muted; },

        skip: function(layerName) {
            var sfxLayer = layers['sfx'];
            var name = layerName || 'music';
            var layer = layers[name];
            if (layer.audio) {
                var old = layer.audio;
                old.onended = null;
                var fadeOut = setInterval(function() {
                    if (old.volume > 0.05) {
                        old.volume = Math.max(0, old.volume - 0.05);
                    } else {
                        old.pause();
                        clearInterval(fadeOut);
                    }
                }, 50);
            }
            layer.currentIndex = (layer.currentIndex + 1) % layer.playlist.length;
            setTimeout(function() {
                playLayer(name);
            }, 400);
        },

        previous: function(layerName) {
            var sfxLayer = layers['sfx'];
            var name = layerName || 'music';
            var layer = layers[name];
            if (layer.audio) {
                var old = layer.audio;
                old.onended = null;
                var fadeOut = setInterval(function() {
                    if (old.volume > 0.05) {
                        old.volume = Math.max(0, old.volume - 0.05);
                    } else {
                        old.pause();
                        clearInterval(fadeOut);
                    }
                }, 50);
            }
            layer.currentIndex = (layer.currentIndex - 1 + layer.playlist.length) % layer.playlist.length;
            setTimeout(function() {
                playLayer(name);
            }, 400);
        },

        playSong: function(path, layerName) {
            var name = layerName || 'music';
            var layer = layers[name];
            var targetVol = muted ? 0 : layer.volume;

            if (layer.audio) {
                var old = layer.audio;
                old.onended = null; // remove existing ended listener
                var fadeOut = setInterval(function() {
                    if (old.volume > 0.05) {
                        old.volume = Math.max(0, old.volume - 0.05);
                    } else {
                        old.pause();
                        clearInterval(fadeOut);
                    }
                }, 50);
            }

            setTimeout(function() {
                var newAudio = new Audio(path);
                layer.audio = newAudio;
                newAudio.volume = 0;
                newAudio.play().catch(function() {});
                var fadeIn = setInterval(function() {
                    if (newAudio.volume < targetVol - 0.05) {
                        newAudio.volume = Math.min(targetVol, newAudio.volume + 0.05);
                    } else {
                        newAudio.volume = targetVol;
                        clearInterval(fadeIn);
                    }
                }, 50);
                newAudio.onended = function() {
                    layer.currentIndex = (layer.currentIndex + 1) % layer.playlist.length;
                    playLayer(name);
                };
            }, 400);
        },

        playSongOnce: function(path, layerName) {
            var name = layerName || 'music';
            var layer = layers[name];
            var targetVol = muted ? 0 : layer.volume;

            if (layer.audio) {
                var old = layer.audio;
                old.onended = null;
                var fadeOut = setInterval(function() {
                    if (old.volume > 0.05) {
                        old.volume = Math.max(0, old.volume - 0.05);
                    } else {
                        old.pause();
                        clearInterval(fadeOut);
                    }
                }, 50);
            }

            setTimeout(function() {
                var newAudio = new Audio(path);
                layer.audio = newAudio;
                newAudio.volume = 0;
                newAudio.play().catch(function() {});
                var fadeIn = setInterval(function() {
                    if (newAudio.volume < targetVol - 0.05) {
                        newAudio.volume = Math.min(targetVol, newAudio.volume + 0.05);
                    } else {
                        newAudio.volume = targetVol;
                        clearInterval(fadeIn);
                    }
                }, 50);
                newAudio.onended = function() {
                    layer.audio = null; 
                };
            }, 800);
        },

        playOneShot: function(path, layerName) {
            var name = layerName || 'sfx';
            var layer = layers[name];
            var vol = muted ? 0 : layer.volume;
            var sound = new Audio(path);
            sound.volume = vol;
            sound.play().catch(function() {});
        },

        addSong: function(layerName, path) {
            layers[layerName].playlist.push(path);
        },

        removeSong: function(layerName, path) {
            var pl = layers[layerName].playlist;
            var idx = pl.indexOf(path);
            if (idx > -1) pl.splice(idx, 1);
        },

        enableLayer: function(layerName) {
            layers[layerName].enabled = true;
            playLayer(layerName);
        },

        disableLayer: function(layerName) {
            layers[layerName].enabled = false;
            stopLayer(layerName);
        },

        pause: function(layerName) {
            var name = layerName || 'music';
            var layer = layers[name];
            if (layer.audio) layer.audio.pause();
        },

        resume: function(layerName) {
            var name = layerName || 'music';
            var layer = layers[name];
            if (layer.audio) layer.audio.play().catch(function() {});
        },

        setVolume: function(layerName, vol) {
            var names = layerName === 'all' ? Object.keys(layers) : [layerName];
            for (var i = 0; i < names.length; i++) {
                layers[names[i]].volume = vol;
                if (layers[names[i]].audio && !muted) {
                    layers[names[i]].audio.volume = vol;
                }
            }
        },
    };
  }());

  window.disableAudio = function() {
    AudioManager.mute();
    window.dendryUI.toggle_audio(false);
  };

  window.enableAudio = function() {
    AudioManager.unmute();
  };

  window.toggleMusicButton = function() {
    var onIcon = document.getElementById('music-on-icon');
    var offIcon = document.getElementById('music-off-icon');
    if (AudioManager.isMuted()) {
        AudioManager.unmute();
        onIcon.style.display = '';
        offIcon.style.display = 'none';
    } else {
        AudioManager.mute();
        onIcon.style.display = 'none';
        offIcon.style.display = '';
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('music-toggle-btn').onclick = function(e) {
        window.toggleMusicButton();
    };
  });

  window.skipSong = function() {
    AudioManager.skip('music');
  };

  window.updateMusicBtn = function() {
      var disabled = window.dendryUI && window.dendryUI.disable_audio;
      var onIcon = document.getElementById('music-on-icon');
      var offIcon = document.getElementById('music-off-icon');
      if (onIcon && offIcon) {
          onIcon.style.display = disabled ? 'none' : 'inline';
          offIcon.style.display = disabled ? 'inline' : 'none';
      }
  };

  window.enableImages = function() {
      window.dendryUI.show_portraits = true;
      window.dendryUI.saveSettings();
  };

  window.disableImages = function() {
      window.dendryUI.show_portraits = false;
      window.dendryUI.saveSettings();
  };

  window.enableLightMode = function() {
      window.dendryUI.dark_mode = false;
      document.body.classList.remove('dark-mode');
      window.dendryUI.saveSettings();
  };
  window.enableDarkMode = function() {
      window.dendryUI.dark_mode = true;
      document.body.classList.add('dark-mode');
      window.dendryUI.saveSettings();
  };

  // populates the checkboxes in the options view
  window.populateOptions = function() {
    var disable_bg = window.dendryUI.disable_bg;
    var animate = window.dendryUI.animate;
    var disable_audio = window.dendryUI.disable_audio;
    var show_portraits = window.dendryUI.show_portraits;
    if (disable_bg) {
        $('#backgrounds_no')[0].checked = true;
    } else {
        $('#backgrounds_yes')[0].checked = true;
    }
    if (animate) {
        $('#animate_yes')[0].checked = true;
    } else {
        $('#animate_no')[0].checked = true;
    }
    if ($('#audio_no')[0]) {
        if (disable_audio) {
            $('#audio_no')[0].checked = true;
        } else {
            $('#audio_yes')[0].checked = true;
        }
    }
    if (show_portraits) {
        $('#images_yes')[0].checked = true;
    } else {
        $('#images_no')[0].checked = true;
    }
    if (window.dendryUI.dark_mode) {
        $('#dark_mode')[0].checked = true;
    } else {
        $('#light_mode')[0].checked = true;
    }
  };

  // POLL DISPLAY GRACIOUSLY PROVIDED BY FRANCOGAMER ON DISCORD and later modified by PUDDLE on discord
  scrollhor = function(tableid) {
        var el = document.getElementById(tableid);

        function scrollHorizontally(e) {
            e = e || window.event;
            var delta = e.deltaY || 0;
            if (!delta && e.wheelDelta) {
                delta = -e.wheelDelta;
            }
            if (!delta && e.detail) {
                delta = e.detail * 40;
            }
            el.scrollLeft += delta * 0.5;
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }
        if (el.addEventListener) {
            el.addEventListener('wheel', scrollHorizontally, { passive: false });
            el.addEventListener('mousewheel', scrollHorizontally, false);
            el.addEventListener('DOMMouseScroll', scrollHorizontally, false);
        } else if (el.attachEvent) {
            el.attachEvent('onmousewheel', scrollHorizontally);
        }
  };

  window.districtElectionData = {};

  window.showDistrictDetail = function(districtId) {
    var data = window.districtElectionData[districtId];
    var container = document.getElementById('district-detail-container');
    if (!container) return;
    if (!data) {
        container.innerHTML = '<p><em>No data available for this district.</em></p>';
        return;
    }
    var html = '<h3>' + data.name + '</h3><table><tr><th>' + 
        (data.type === 'parliament' ? 'Party' : 'Candidate') + 
        '</th><th>' + (data.type === 'parliament' ? 'Seats' : 'Vote %') + '</th></tr>';
    data.results.forEach(function(row) {
        html += '<tr><td>' + row.label + '</td><td>' + row.value + '</td></tr>';
    });
    html += '</table>';
    container.innerHTML = applyWholesome(html);
};

window.renderNationalList = function() {
    var container = document.getElementById('national-list-container');
    var data = window.districtElectionData.national_list;
    if (!container || !data) return;
    var html = '<h3>' + data.name + '</h3><table style="font-size:0.85em;"><tr><th>Party</th><th>Seats</th></tr>';
    data.results.forEach(function(r) {
        html += '<tr><td>' + r.label + '</td><td>' + r.value + '</td></tr>';
    });
    html += '</table>';
    container.innerHTML = applyWholesome(html);
};

  
  // This function allows you to modify the text before it's displayed.
  window.displayText = function (text) {
        return applyWholesome(text);
    };
  
    //To check if extra dynamic or not
    function getDynamicTooltipContent(searchString, baseTooltip) {
        var Q = window.dendryUI && window.dendryUI.dendryEngine && window.dendryUI.dendryEngine.state ? 
                window.dendryUI.dendryEngine.state.qualities : null;
        
        if (!Q) return baseTooltip.explanationText;

        if (searchString === 'Sinhalese' && Q.sinhala_proportion !== undefined) {
            var proptext = Q.sinhala_proportion;
            return baseTooltip.explanationText + '<br>' + proptext + '% of the population';
        }

        return baseTooltip.explanationText;
        
    }
    
    window.getDynamicTooltipContent = getDynamicTooltipContent;
  
    function applyWholesome(str) {
        const allWords = new Set([
            ...tooltipList.map(t => t.searchString),
            ...colourList.map(c => c.word)
        ]);
    
        // Escape special regex characters in the words
        const escapedWords = [...allWords].map(word => 
            word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        );
        
        const regex = new RegExp(`\\b(${escapedWords.join('|')})\\b`, 'g');
    
        return str.replace(/(<(?:span|strong)[^>]*>.*?<\/(?:span|strong)>|<[^>]+>|[^<]+)/g, (segment) => {
            if (segment.startsWith('<')) return segment;
    
            return segment.replace(regex, (match) => {
                const tooltip = tooltipList.find(t => t.searchString === match);
                const colour = colourList.find(c => c.word === match);
    
                let style = colour ? colour.style : '';
                let innerText = match;
    
                if (colour && colour.img) {
                    innerText = `<img src="${colour.img}" class="p_icon" alt="">${innerText}`;
                }
    
                if (tooltip) {
                    var tooltipContent = getDynamicTooltipContent(match, tooltip);
                    return `<span class='mytooltip' style='${style}'>${innerText}<span class='mytooltiptext'>${tooltipContent}</span></span>`;
                } else if (colour) {
                    return `<span style='${style}'>${innerText}</span>`;
                }
    
                return match;
            });
        });
    }

  // This function allows you to do something in response to signals.
  window.handleSignal = function(signal, event, scene_id) {
  };
  
  // This function runs on a new page. Right now, this auto-saves.
  window.onNewPage = function() {
    var scene = window.dendryUI.dendryEngine.state.sceneId;
    if (scene != 'root' && !window.justLoaded) {
        window.dendryUI.autosave();
    }
    if (window.justLoaded) {
        window.justLoaded = false;
    }
  };

  // TODO: have some code for tabbed sidebar browsing.
  window.updateSidebar = function() {
    $('#qualities').empty();
    var scene = dendryUI.game.scenes[window.statusTab];
    dendryUI.dendryEngine._runActions(scene.onArrival);
    var displayContent = dendryUI.dendryEngine._makeDisplayContent(scene.content, true);
    var html = dendryUI.contentToHTML.convert(displayContent);
    $('#qualities').html(window.displayText(html));
  };

window.updateSidebarRight = function() {
    $('#qualities_right').empty();
    var scene = dendryUI.game.scenes[window.statusTabRight];
    dendryUI.dendryEngine._runActions(scene.onArrival);
    var displayContent = dendryUI.dendryEngine._makeDisplayContent(scene.content, true);
    var html = dendryUI.contentToHTML.convert(displayContent);
    $('#qualities_right').html(window.displayText(html));
  };

  window.changeTab = function(newTab, tabId) {
      if (tabId == 'poll_tab' && dendryUI.dendryEngine.state.qualities.historical_mode) {
          window.alert('Polls are not available in historical mode.');
          return;
      }
      var tabButton = document.getElementById(tabId);
      var tabButtons = document.getElementsByClassName('tab_button');
      for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(' active', '');
      }
      tabButton.className += ' active';
      window.statusTab = newTab;
      window.updateSidebar();
  };

  window.currentRightTab = null;

  window.changeTabRight = function(newTab, tabId) {
    window.statusTabRight = newTab;
    window.updateSidebarRight();
  };

  window.toggleRightPanel = function() {
    var page = document.getElementById('page');
    if (page.classList.contains('right-panel-open')) {
        page.classList.remove('right-panel-open');
    } else {
        window.changeTabRight('status_right', 'nation_tab');
        page.classList.add('right-panel-open');
    }
  };

  window.switchRightPanel = function(scene, tabId) {
    window.changeTabRight(scene, tabId);
    document.querySelectorAll('#right-panel-nav .tab_button').forEach(function(btn) {
        btn.classList.remove('active');  
    });
    document.getElementById(tabId).classList.add('active');
  };


  /*
   * This function copied from the code for Infinite Space Battle Simulator
   *
   * quality - a number between max and min
   * qualityName - the name of the quality
   * max and min - numbers
   * colors - if true/1, will use some color scheme - green to yellow to red for high to low
   * */
  window.generateBar = function(quality, qualityName, max, min, colors) {
      var bar = document.createElement('div');
      bar.className = 'bar';
      var value = document.createElement('div');
      value.className = 'barValue';
      var width = (quality - min)/(max - min);
      if (width > 1) {
          width = 1;
      } else if (width < 0) {
          width = 0;
      }
      value.style.width = Math.round(width*100) + '%';
      if (colors) {
          value.style.backgroundColor = window.probToColor(width*100);
      }
      bar.textContent = qualityName + ': ' + quality;
      if (colors) {
          bar.textContent += '/' + max;
      }
      bar.appendChild(value);
      return bar;
  };

  window.onDisplayContent = function() {
    window.updateSidebar();
    window.updateSidebarRight();
    setTimeout(function() {
        var els = document.querySelectorAll('#status_parliament');
        var el = els[els.length - 1];
        if (!el || !window._parliData || window._parliData.length === 0) return;
        var w = el.parentElement.offsetWidth || 450;
        el.setAttribute('width', w);
        el.setAttribute('height', Math.round(w * 0.50));
        var parl = d3.parliament();
        parl.width(w).height(Math.round(w * 0.50)).innerRadiusCoef(0.4);
        parl.enter.fromCenter(false).smallToBig(false);
        parl.exit.toCenter(false).bigToSmall(false);
        d3.select(el).datum(window._parliData).call(parl);
    }, 800);
  };

 window.statusTab = "status";
 window.statusTabRight = "status_right";
  window.justLoaded = true;
  window.dendryModifyUI = main;
  console.log("Modifying stats: see dendryUI.dendryEngine.state.qualities");

  window.onload = function() {
    window.dendryUI.toggle_audio(false);
    AudioManager.init();
    window.dendryUI.loadSettings({show_portraits: false});
    window.statusTab = "status";
    window.statusTabRight = "status_right";
    window.updateSidebar();
    window.updateSidebarRight();
    if (window.dendryUI.dark_mode) {
        document.body.classList.add('dark-mode');
    }
    var observerTimer;
        var observer = new MutationObserver(function() {
            clearTimeout(observerTimer);
            observerTimer = setTimeout(function() {
                var els = document.querySelectorAll('#status_parliament');
                var el = els[els.length - 1];
                if (!el || !window._parliData || window._parliData.length === 0) return;
                var w = el.parentElement.offsetWidth || 450;
                el.setAttribute('width', w);
                el.setAttribute('height', Math.round(w * 0.50));
                var parl = d3.parliament();
                parl.width(w).height(Math.round(w * 0.50)).innerRadiusCoef(0.4);
                parl.enter.fromCenter(false).smallToBig(false);
                parl.exit.toCenter(false).bigToSmall(false);
                d3.select(el).datum(window._parliData).call(parl);
            }, 100);
        });
        observer.observe(document.getElementById('content'), { childList: true, subtree: true });
    observer.observe(document.getElementById('content'), { childList: true, subtree: true });
  };

}());

document.addEventListener('mousemove', e => {
    document.querySelectorAll('.mytooltiptext').forEach(el => {
        el.style.setProperty('--mouse-x', e.clientX + 'px');
        el.style.setProperty('--mouse-y', e.clientY + 'px');
    });
});

document.addEventListener('mouseover', e => {
    const tooltip = e.target.closest('.mytooltip');
    if (tooltip) {
        const text = tooltip.querySelector('.mytooltiptext');
        if (text) {
            text.style.setProperty('--mouse-x', e.clientX + 'px');
            text.style.setProperty('--mouse-y', e.clientY + 'px');
        }
    }
});

document.addEventListener('click', function(e) {
    var choiceLink = e.target.closest('ul.choices li');
    if (choiceLink) {
        console.log('choice clicked!');
        AudioManager.playOneShot('music/sfx/button_click.mp3', 'sfx');
    }
},true);

window.addEventListener('dendryload', function() {
    window.updateMusicBtn();
});



