import glob as gb
import os
# os.mkdir('./csv.js')
for _file in  gb.glob('./images/*'):
    print('import ' +_file.split('/')[2].split('.')[0] +' from \''+ _file+'\';')
    #  os.write('./csv.js','import ' +_file.split('/')[2].split('.')[0] +' from \''+ _file+'\';')
    # print(_file.split('/')[2].split('.')[0] + ',')
   