Q='date'
P='application/json'
O='Content-Type'
N='Press Enter to send...'
M='Date: '
B=str
A=input
import requests as D
E=int(A('1. Status\n2. Read\nSelect: '))
if E==1:F=B(A('Location: '));C=B(A(M));G=B(A('Time: '));H=B(A('Timezone: '));I=B(A('Feeling: '));A(N);J=D.post('http://api.lgsk.me/hn/stat',headers={O:P},json={'loc':F,Q:C,'time':G,'TZ':H,'feeling':I})
if E==2:K=A('Title: ');C=A(M);L=A('Content: ');A(N);J=D.post('http://api.lgsk.me/hn/read',headers={O:P},json={'title':K,Q:C,'content':L})