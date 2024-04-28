import { BackendService } from "../services/backend/backend.service";
import { IUser, IUserCreate } from "../typings/user";
import { generateRandomEmail, generateRandomNumber, generateRandomString } from "../utils/test-generate";

describe('[ BACKEND ]', () => {
    const backendService = new BackendService();

    const user = {
      register: {
        email: generateRandomEmail(),
        password: generateRandomString(20),
        name: generateRandomString(50),
        username: generateRandomString(16)
      } as IUserCreate,
      maxLength: {
        register: {
            email: generateRandomString(1000),
            password: generateRandomString(1000),
            name: generateRandomString(1000),
            username: generateRandomString(1000)
        } as IUserCreate,
      },
      structure: {
        register: {
          email: generateRandomNumber(0,100),
          password: generateRandomNumber(0,100),
          name: generateRandomNumber(0,100),
          username: generateRandomNumber(0,100)
        }
      },

    };

    describe('[ HEALTH CHECK ]', () => {
        it('should verify Health Check', async () => {
            const {status, error, data} = await backendService.healthCheck()
        
            expect(status).toBe(200);
            expect(error).toBeUndefined();
            expect(data).toBeDefined();
          });
    })
  
    describe('[ USER ]', () => {
      describe('[ CREATE ]', () => {
        const toDefined = (body: IUser) => {
            expect(body.email).toBeDefined()
            expect(body.name).toBeDefined()
            expect(body.username).toBeDefined()
            expect(body.status).toBeDefined()
            expect(body.pro).toBeDefined()
        }

        const toUnprocess = (message: string[], type: 'max' | 'structure' | 'required') => {
            const validateMessage = {
              'max': [            
                'O campo username deve ter no máximo 16 caracteres',
                'O campo email é inválido',
                'O campo email deve ter no máximo 255 caracteres',
                'O campo password deve ter no máximo 20 caracteres',
                'O campo name deve ter no máximo 20 caracteres'
              ],
              'structure': [
                "O campo email é inválido",
                "O campo password deve conter apenas letras",
                "O campo name deve conter apenas letras",
                "O campo username deve conter apenas letras"
              ],
              'required': [
                "O campo email é obrigatário",
                "O campo password é obrigatário",
                "O campo name é obrigatário",
                "O campo username é obrigatário",
              ]
            }[type]

            validateMessage.forEach(m => {
                expect(message).toContain(m)
            })
        }

        const toCompare = (body: IUserCreate, bodyResponse: IUser) => {
            expect(body.email).toBe(bodyResponse.email)
            expect(body.name).toBe(bodyResponse.name)
            expect(body.username).toBe(bodyResponse.username)
            expect(bodyResponse.status).toBe(true)
            expect(bodyResponse.pro).toBe(false)
        }

        it('[201] should create user', async () => {
            const {status, error, data} = await backendService.register(user.register)

            expect(status).toBe(201);
            toDefined(data);
            toCompare(user.register, data);
            expect(error).toBeUndefined();
        });

        it('[409] shouldn`t create user with duplicated username', async () => {
            const {status, error, data: {mensagem}} = await backendService.register({...user.register, 'email': generateRandomEmail()})

            expect(status).toBe(409);
            expect(error).toBeDefined();
            expect(mensagem).toBe('Já existe um usuário com esse username');
        });

        it('[409] shouldn`t create user with duplicated email', async () => {
            const {status, error, data: {mensagem}} = await backendService.register({...user.register, 'username': generateRandomString(16)})
        
            expect(status).toBe(409);
            expect(error).toBeDefined();
            expect(mensagem).toBe('Já existe um usuário com esse email');
        });

        it('[422] should validate max length', async () =>{
          const {status, error, data} = await backendService.register(user.maxLength.register)
          console.log(data)
          expect(status).toBe(422);
          expect(error).toBeDefined();
          toUnprocess(data, 'max')
          expect(data).toBeDefined();
        })

        it('[422] should validate structure', async () =>{
          const {status, error, data} = await backendService.register(user.structure.register as unknown as IUserCreate)
          
          expect(status).toBe(422);
          toUnprocess(data, 'structure')
          expect(error).toBeDefined();
          expect(data).toBeDefined();          
        })

        it('[422] should validate required', async () =>{
          const {status, error, data} = await backendService.register({} as IUserCreate)
          
          expect(status).toBe(422);
          expect(error).toBeDefined();
          expect(data).toBeDefined();
          toUnprocess(data, 'structure')
        })
      })

      describe('[LOGIN]', () => {
        it('[200] should login', async () => {
          const {status, error, data} = await backendService.login({
            username: user.register.username,
            password: user.register.password
          })
          console.log(data)
          expect(status).toBe(200);
          expect(error).toBeUndefined();
          expect(data.email).toBe(user.register.email)
          expect(data.name).toBe(user.register.name)
          expect(data.token).toBeDefined()
        })
      })
    })
})