function mxDetect_finger(port, call_back_fun) {
    var ws = new WebSocket("proxy-server-production-6280.up.railway.app/finger");
    ws.onopen = function (evt) {
        var command = "Mx_DetectFinger|" + port + "|" + "";
        ws.send(command);
    }
    ws.onmessage = function (evt) {
        ws.close();
        var resp = eval('(' + evt.data + ')');
        call_back_fun(resp.result, resp.content);
    };
    ws.onclose = function (evt) {
    };
    //ws.onerror 
    ws.onerror = function (evt) {
        call_back_fun(-100, "Fingerprint drive is not installed or not started");
    };
}
function mxGetDevInfo(port, call_back_fun) {
    var ws = new WebSocket("proxy-server-production-6280.up.railway.app/finger");
    ws.onopen = function (evt) {
        var command = "Mx_GetDeviceInfo|" + port + "|" + "";
        ws.send(command);
    }

    ws.onmessage = function (evt) {
        ws.close();
        var resp = eval('(' + evt.data + ')');
        call_back_fun(resp.result, resp.data, resp.devsn);
    };

    ws.onclose = function (evt) {
    };
    ws.onerror = function (evt) {
        call_back_fun(-100, "Fingerprint drive is not installed or not started");
    };
}

function mxGetSDKInfor(port, call_back_fun){
    var ws = new WebSocket("proxy-server-production-6280.up.railway.app/finger");
  ws.onopen = function(evt) {
      var command = "FP_GetSDKVersion|" + port + "|" + "";
	  ws.send(command);
	}

  ws.onmessage = function(evt) {
	  ws.close();
	  var resp = eval('('+evt.data+')');
	  call_back_fun(resp.result, resp.data, resp.driversion);
  };

  ws.onclose = function(evt) {
  };
  ws.onerror = function (evt) {
      call_back_fun(-100, "Fingerprint drive is not installed or not started");
  };
}

function mxTwoTemplateMatch(featureType, templateA, templateB, call_back_fun) {
    var ws = new WebSocket("proxy-server-production-6280.up.railway.app/finger");
    ws.onopen = function (evt) {
        var command = "Mx_TwoTemplateMatch|" + featureType + "|" + templateA + "|" + templateB; //
        ws.send(command);
    }

    ws.onmessage = function (evt) {
        ws.close();
        var resp = eval('(' + evt.data + ')');
        call_back_fun(resp.result, resp.data);
        var curPath = getCurrentDirectory();
    };

    ws.onclose = function (evt) {
    };
    ws.onerror = function (evt) {
        call_back_fun(-100, "Fingerprint drive is not installed or not started");
    };
}

function mxFingerMatch(port, ledVal, algmod, nfiqvalue, ntimeout, nuserid, call_back_fun) {
    var ws = new WebSocket("proxy-server-production-6280.up.railway.app/finger");
  ws.onopen = function(evt) {
      var command = "Mx_FingerMatch|" + nuserid + "|" + ledVal + "|" + algmod + "|" + nfiqvalue + "|" + ntimeout; //
	  ws.send(command);
	}

  ws.onmessage = function(evt) {
	  ws.close();
	  var resp = eval('('+evt.data+')');
	  call_back_fun(resp.result, resp.data, resp.ntime, resp.fingermb, resp.message);
    var curPath = getCurrentDirectory();
  };

  ws.onclose = function(evt) {
  };
  ws.onerror = function (evt) {
      call_back_fun(-100, "Fingerprint drive is not installed or not started");
  };
}

function mxFingerSearch(port, ledVal, algmod, nfiqvalue, ntimeout, nuserid, call_back_fun) {
    var ws = new WebSocket("proxy-server-production-6280.up.railway.app/finger");
    ws.onopen = function (evt) {
        var command = "Mx_FingerSearch|" + nuserid + "|" + ledVal + "|" + algmod + "|" + nfiqvalue + "|" + ntimeout; //
        ws.send(command);
    }

    ws.onmessage = function (evt) {
        ws.close();
        var resp = eval('(' + evt.data + ')');
        call_back_fun(resp.result, resp.data, resp.ntime, resp.fingermb, resp.userid);
        var curPath = getCurrentDirectory();
    };

    ws.onclose = function (evt) {
    };
    ws.onerror = function (evt) {
        call_back_fun(-100, "Fingerprint drive is not installed or not started");
    };
}

function mxGetTz(port, ledVal, algmod, nfiqvalue, ntimeout, nuserid, call_back_fun) {
    var ws = new WebSocket("proxy-server-production-6280.up.railway.app/finger");
  ws.onopen = function(evt) {
      //var command = "Mx_GetTzFeatures|" + port + "|" + ledVal + "|" + algmod + "|" + nfiqvalue + "|" + ntimeout + "|" + nuserid + ""; //
      var command = "Mx_GetTzFeatures|" + nuserid + "|" + ledVal + "|" + algmod + "|" + nfiqvalue + "|" + ntimeout; //
	  ws.send(command);
	}

  ws.onmessage = function(evt) {
	  ws.close();
	  var resp = eval('('+evt.data+')');
	  call_back_fun(resp.result, resp.data, resp.ntime, resp.fingermb, resp.message);
    var curPath = getCurrentDirectory();
  };

  ws.onclose = function(evt) {
  };
  ws.onerror = function (evt) {
      call_back_fun(-100, "Fingerprint drive is not installed or not started");
  };
}

function mxGetTemplateTest(port, ledVal, algmod, nfiqvalue, ntimeout, nuserid, call_back_fun) {
    var ws = new WebSocket("proxy-server-production-6280.up.railway.app/finger");
    ws.onopen = function (evt) {
        var command = "Mx_GetFeaturesTest|" + nuserid + "|" + ledVal + "|" + algmod + "|" + nfiqvalue + "|" + ntimeout; //
        ws.send(command);
    }

    ws.onmessage = function (evt) {
        ws.close();
        var resp = eval('(' + evt.data + ')');
        call_back_fun(resp.result, resp.data, resp.ntime, resp.fingermb, resp.message);
        var curPath = getCurrentDirectory();
    };

    ws.onclose = function (evt) {
    };
    ws.onerror = function (evt) {
        call_back_fun(-100, "Fingerprint drive is not installed or not started");
    };
}

function mxGetMb(port, algmod, ckled, call_back_fun){
    var ws = new WebSocket("proxy-server-production-6280.up.railway.app/finger");
  ws.onopen = function(evt) {
      var command = "Mx_GetMbTemplate|" + port + "|" + ckled + "|" + algmod;
	  ws.send(command);
	}

  ws.onmessage = function(evt) {
	  ws.close();
	  var resp = eval('('+evt.data+')');
	  call_back_fun(resp.result, resp.fingermb);
    //var curPath = getCurrentDirectory();
  };

  ws.onclose = function(evt) {
  };
  ws.onerror = function (evt) {
      call_back_fun(-100, "Fingerprint drive is not installed or not started");
  };
}

function mxGetImg(port, ckled, imgcompress, nfiqvalue, ntimeout, call_back_fun) {
  var ws = new WebSocket("proxy-server-production-6280.up.railway.app/finger");
//   proxy-server-production-6280.up.railway.app/finger
// proxy-server-production-6280.up.railway.app
  ws.onopen = function(evt) {
      var command = "Mx_GetImage|" + port + "|" + ckled + "|" + imgcompress + "|" + nfiqvalue + "|" + ntimeout;
	  ws.send(command);
	}

  ws.onmessage = function(evt) {
    console.log({evt});
    
	  ws.close();
	  var resp = eval('('+evt.data+')');
	  call_back_fun(resp.result, resp.data, resp.liveresult, resp.ntime, resp.nfiscore, resp.pscore, resp.imgpress, resp.compresslen);
    var curPath = getCurrentDirectory();
  };

  ws.onclose = function(evt) {
  };
  ws.onerror = function (evt) {
      call_back_fun(-100, "Fingerprint drive is not installed or not started");
  };
}

function mxGetMinutiae(port, call_back_fun) {
        var ws = new WebSocket("proxy-server-production-6280.up.railway.app/finger");
        ws.onopen = function (evt) {
            var command = "Mx_GetMinutiae|" + port + "|" + "";
            ws.send(command);
        }
        ws.onmessage = function (evt) {
            ws.close();
            var resp = eval('(' + evt.data + ')');
            call_back_fun(resp.result, resp.data, resp.ntime);
        };
        ws.onclose = function (evt) {
        };
        ws.onerror = function (evt) {
            call_back_fun(-100, "Fingerprint drive is not installed or not started");
        };
    }

function mxRemoveUser(port, nuserid, call_back_fun){
    var ws = new WebSocket("proxy-server-production-6280.up.railway.app/finger");
  ws.onopen = function(evt) {
	 
      var command = "FP_RemovUserID|" + port + "|" + nuserid;
	  ws.send(command);
	}

  ws.onmessage = function(evt) {
	  ws.close();
	  var resp = eval('('+evt.data+')');
    call_back_fun(resp.result, resp.data);
    var curPath = getCurrentDirectory();
  };

  ws.onclose = function(evt) {
  };
  ws.onerror = function (evt) {
      call_back_fun(-100, "Fingerprint drive is not installed or not started");
  };
}

function mxClearDB(port, call_back_fun) {
    var ws = new WebSocket("proxy-server-production-6280.up.railway.app/finger");
    ws.onopen = function (evt) {

        var command = "FP_ClerMemoryDb|" + port;
        ws.send(command);
    }

    ws.onmessage = function (evt) {
        ws.close();
        var resp = eval('(' + evt.data + ')');
        call_back_fun(resp.result, resp.data);
        var curPath = getCurrentDirectory();
    };

    ws.onclose = function (evt) {
    };
    ws.onerror = function (evt) {
        call_back_fun(-100, "Fingerprint drive is not installed or not started");
    };
}

function mxGetDBInfo(port, call_back_fun) {
    var ws = new WebSocket("proxy-server-production-6280.up.railway.app/finger");
    ws.onopen = function (evt) {

        var command = "FP_GetDBInfo|" + port;
        ws.send(command);
    }

    ws.onmessage = function (evt) {
        ws.close();
        var resp = eval('(' + evt.data + ')');
        call_back_fun(resp.result, resp.data);
        var curPath = getCurrentDirectory();
    };

    ws.onclose = function (evt) {
    };
    ws.onerror = function (evt) {
        call_back_fun(-100, "Fingerprint drive is not installed or not started");
    };
}

function mxDecompressionImg(port, compresstype, imgpresslen, imgcompress, call_back_fun) {
    var ws = new WebSocket("proxy-server-production-6280.up.railway.app/finger");
    ws.onopen = function (evt) {
        var command = "Mx_DecompressionImg|" + port + "|" + compresstype + "|" + imgpresslen + "|" + imgcompress;
        ws.send(command);
    }

    ws.onmessage = function (evt) {
        ws.close();
        var resp = eval('(' + evt.data + ')');
        call_back_fun(resp.result, resp.data);
        var curPath = getCurrentDirectory();
    };

    ws.onclose = function (evt) {
    };
    ws.onerror = function (evt) {
        call_back_fun(-100, "Fingerprint drive is not installed or not started");
    };
}

function _saveAs(data, name) {
    const urlObject = window.URL || window.webkitURL || window;
    const save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    save_link.href = urlObject.createObjectURL(new Blob([data]));
    save_link.download = name;
    save_link.click();
}

//获取当前路径
function getCurrentDirectory(){
	var locHref = location.href;
	var locArray = locHref.split("/");
  delete locArray[locArray.length-1];
  var dirTxt = locArray.join("//");
	var temp = dirTxt.substring(11);
	var newtemp="";
	//需要过滤空格%20 UNICODE显示
	var i;
	for(i=0 ;i < temp.length;i++)
	{
		if (temp.substr(i,3) == "%20")
		{
			newtemp = newtemp + " ";
			i=i+2;
		}else
		{
			newtemp = newtemp +temp.substr(i,1);
		}
	}
	//alert(newtemp);
  return newtemp;
}
