document.write("<!-- 灯笼1 -->");
document.write("<div class=\"deng-box\">");
document.write("	<div class=\"deng\">");
document.write("		<div class=\"xian\"><\/div>");
document.write("		<div class=\"deng-a\">");
document.write("			<div class=\"deng-b\"><div class=\"deng-t\">节<\/div><\/div>");
document.write("		<\/div>");
document.write("		<div class=\"shui shui-a\"><div class=\"shui-c\"><\/div><div class=\"shui-b\"><\/div><\/div>");
document.write("	<\/div>");
document.write("<\/div>");
document.write(" ");
document.write("<!-- 灯笼2 -->");
document.write("<div class=\"deng-box1\">");
document.write("	<div class=\"deng\">");
document.write("		<div class=\"xian\"><\/div>");
document.write("		<div class=\"deng-a\">");
document.write("			<div class=\"deng-b\"><div class=\"deng-t\">春<\/div><\/div>");
document.write("		<\/div>");
document.write("		<div class=\"shui shui-a\"><div class=\"shui-c\"><\/div><div class=\"shui-b\"><\/div><\/div>");
document.write("	<\/div>");
document.write("<\/div>");
document.write("");
document.write("<style>");
document.write(".deng-box {");
document.write("	position: fixed;");
document.write("	top: -40px;");
document.write("	right: 200px;");
document.write("	z-index: 9999;");
document.write("	pointer-events: none;");
document.write("}");
document.write(" ");
document.write(".deng-box1 {");
document.write("	position: fixed;");
document.write("	top: -30px;");
document.write("	right: 180px;");
document.write("	z-index: 9999;");
document.write("	pointer-events: none;");
document.write("}");
document.write("");
document.write(".deng-box1 .deng {");
document.write("	position: relative;");
document.write("	width: 120px;");
document.write("	height: 90px;");
document.write("	margin: 50px;");
document.write("	background: #d8000f;");
document.write("	background: rgba(216, 0, 15, 0.8);");
document.write("	border-radius: 50% 50%;");
document.write("	-webkit-transform-origin: 50% -100px;");
document.write("	-webkit-animation: swing 5s infinite ease-in-out;");
document.write("	box-shadow: -5px 5px 30px 4px rgba(252, 144, 61, 1);");
document.write("}");
document.write("");
document.write(".deng {");
document.write("	position: relative;");
document.write("	width: 120px;");
document.write("	height: 90px;");
document.write("	margin: 50px;");
document.write("	background: #d8000f;");
document.write("	background: rgba(216, 0, 15, 0.8);");
document.write("	border-radius: 50% 50%;");
document.write("	-webkit-transform-origin: 50% -100px;");
document.write("	-webkit-animation: swing 3s infinite ease-in-out;");
document.write("	box-shadow: -5px 5px 50px 4px rgba(250, 108, 0, 1);");
document.write("}");
document.write("");
document.write(".deng-a {");
document.write("	width: 100px;");
document.write("	height: 90px;");
document.write("	background: #d8000f;");
document.write("	background: rgba(216, 0, 15, 0.1);");
document.write("	margin: 12px 8px 8px 10px;");
document.write("	border-radius: 50% 50%;");
document.write("	border: 2px solid #dc8f03;");
document.write("}");
document.write("");
document.write(".deng-b {");
document.write("	width: 45px;");
document.write("	height: 90px;");
document.write("	background: #d8000f;");
document.write("	background: rgba(216, 0, 15, 0.1);");
document.write("	margin: -2px 8px 8px 26px;");
document.write("	border-radius: 50% 50%;");
document.write("	border: 2px solid #dc8f03;");
document.write("}");
document.write("");
document.write(".xian {");
document.write("	position: absolute;");
document.write("	top: -20px;");
document.write("	left: 60px;");
document.write("	width: 2px;");
document.write("	height: 20px;");
document.write("	background: #dc8f03;");
document.write("}");
document.write("");
document.write(".shui-a {");
document.write("	position: relative;");
document.write("	width: 5px;");
document.write("	height: 20px;");
document.write("	margin: -5px 0 0 59px;");
document.write("	-webkit-animation: swing 4s infinite ease-in-out;");
document.write("	-webkit-transform-origin: 50% -45px;");
document.write("	background: #ffa500;");
document.write("	border-radius: 0 0 5px 5px;");
document.write("}");
document.write("");
document.write(".shui-b {");
document.write("	position: absolute;");
document.write("	top: 14px;");
document.write("	left: -2px;");
document.write("	width: 10px;");
document.write("	height: 10px;");
document.write("	background: #dc8f03;");
document.write("	border-radius: 50%;");
document.write("}");
document.write("");
document.write(".shui-c {");
document.write("	position: absolute;");
document.write("	top: 18px;");
document.write("	left: -2px;");
document.write("	width: 10px;");
document.write("	height: 35px;");
document.write("	background: #ffa500;");
document.write("	border-radius: 0 0 0 5px;");
document.write("}");
document.write("");
document.write(".deng:before {");
document.write("	position: absolute;");
document.write("	top: -7px;");
document.write("	left: 29px;");
document.write("	height: 12px;");
document.write("	width: 60px;");
document.write("	content: \" \";");
document.write("	display: block;");
document.write("	z-index: 999;");
document.write("	border-radius: 5px 5px 0 0;");
document.write("	border: solid 1px #dc8f03;");
document.write("	background: #ffa500;");
document.write("	background: linear-gradient(to right, #dc8f03, #ffa500, #dc8f03, #ffa500, #dc8f03);");
document.write("}");
document.write("");
document.write(".deng:after {");
document.write("	position: absolute;");
document.write("	bottom: -7px;");
document.write("	left: 10px;");
document.write("	height: 12px;");
document.write("	width: 60px;");
document.write("	content: \" \";");
document.write("	display: block;");
document.write("	margin-left: 20px;");
document.write("	border-radius: 0 0 5px 5px;");
document.write("	border: solid 1px #dc8f03;");
document.write("	background: #ffa500;");
document.write("	background: linear-gradient(to right, #dc8f03, #ffa500, #dc8f03, #ffa500, #dc8f03);");
document.write("}");
document.write("");
document.write(".deng-t {");
document.write("	font-family: 华文行楷,Arial,Lucida Grande,Tahoma,sans-serif;");
document.write("	font-size: 3.2rem;");
document.write("	color: #dc8f03;");
document.write("	font-weight: bold;");
document.write("	line-height: 85px;");
document.write("	text-align: center;");
document.write("}");
document.write("");
document.write(".night .deng-t, ");
document.write(".night .deng-box, ");
document.write(".night .deng-box1 {");
document.write("	background: transparent !important;");
document.write("}");
document.write("");
document.write("@-moz-keyframes swing {");
document.write("	0% {");
document.write("		-moz-transform: rotate(-10deg)");
document.write("	}");
document.write("");
document.write("	50% {");
document.write("		-moz-transform: rotate(10deg)");
document.write("	}");
document.write(" ");
document.write("	100% {");
document.write("		-moz-transform: rotate(-10deg)");
document.write("	}");
document.write("}");
document.write("");
document.write("@-webkit-keyframes swing {");
document.write("	0% {");
document.write("		-webkit-transform: rotate(-10deg)");
document.write("	}");
document.write("");
document.write("	50% {");
document.write("		-webkit-transform: rotate(10deg)");
document.write("	}");
document.write("");
document.write("	100% {");
document.write("		-webkit-transform: rotate(-10deg)");
document.write("	}");
document.write("}");
document.write("<\/style>");
