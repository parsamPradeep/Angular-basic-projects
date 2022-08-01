import { BaseRequestOptions, Http, RequestMethod, Response, ResponseOptions } from "@angular/http";
import { MockBackend, MockConnection } from '@angular/http/testing'

export function fakeBackendFactory(
    backend: MockBackend,
    options: BaseRequestOptions)
{
    
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlByYWRlcCIsImFkbWluIjp0cnVlfQ.nAlIhRxCRB4ecGnwJ4GJJ5GXjGxTT7qJ2RyEmYt5Uwo';

    backend.connections.subscribe((connection: MockConnection) => {
        setTimeout(() => {

            if(connection.request.url.endsWith('api/authenticate') && 
            connection.request.method===RequestMethod.Post){
                let body = JSON.parse(connection.request.getBody());

                if(body.email==="pradeep@gmail.com" && body.password=="1234"){
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            status: 200,
                            body: {token: token} 
                        })));
                } else {
                    connection.mockRespond(new Response(
                        new ResponseOptions({status: 200})
                    ));
                }
            }

            if(connection.request.url.endsWith('api/order') &&
            connection.request.method=== RequestMethod.Get){
                if(connection.request.headers.get('Autherization') === 'Bearer '+token ){
                    connection.mockRespond(new Response(
                        new ResponseOptions({status: 200, body:[1,2,3]})
                    ));
                }else{
                    connection.mockRespond(new Response(
                        new ResponseOptions({status: 401})
                    ));
                }
            }
        }, 1000);

        
    });

    return new Http(backend, options);
}

export let fakeBackendFactoryProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};