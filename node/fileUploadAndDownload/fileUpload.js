const fs = require('fs');
let formidable = require('formidable');
let form = new formidable.IncomingForm();
form.encoding = 'utf-8';
form.uploadDir = 'temp'; //设置文件上传临时目录

//处理表单上传文件
function fu(pathname, request, response) {
    form.parse(request, (err, fields, files) => {
        for (let key in files) {
            let file = files[key];
            //过滤空文件
            if (file.size == 0 && file.name == '') continue;

            let fileType = file.type.split('/')[1],
                oldPath = file.path,
                newPath = 'file/' + Date.now() + Math.random() + '.' + fileType;

            //将文件移动到file文件夹下
            try{
                fs.rename(oldPath,newPath,(err)=>{
                    //console.log('done!');
                });
            }catch(e){
                console.log(e);
            }
        }
    });
    response.end();
}

module.exports = {
    fu
}