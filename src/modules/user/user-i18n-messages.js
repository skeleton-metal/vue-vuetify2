const messages = {
    en: {
        roles: {
            createTitle: 'Creating role',
            updateTitle: 'Updating role',
            adminTitle: 'Roles management',
            showTitle: 'Roles and Permissions',
            permission: 'Permission',
            permissions: {
                SECURITY_USER_CREATE: 'User creation',
                SECURITY_USER_EDIT: 'User edition',
                SECURITY_USER_DELETE: 'User deletion',
                SECURITY_USER_SHOW: 'User display',
                SECURITY_GROUP_CREATE: 'Group creation',
                SECURITY_GROUP_EDIT: 'Group Edition',
                SECURITY_GROUP_DELETE: 'Group deletion',
                SECURITY_GROUP_SHOW: 'Group display',
                SECURITY_ROLE_SHOW: 'Role display',
                SECURITY_ROLE_CREATE: 'Role creation',
                SECURITY_ROLE_EDIT: 'Role edition',
                SECURITY_DASHBOARD_SHOW: 'Security dashboard display',
                CUSTOMIZATION_SHOW: 'Customization display',
                CUSTOMIZATION_COLORS_UPDATE: 'Customization colors update',
                CUSTOMIZATION_LOGO_UPDATE: 'Customization logo update',
                CUSTOMIZATION_LANG_UPDATE: 'Customization language update'
            }
        },
        group: {
            createTitle: 'Creating group',
            updateTitle: 'Updating group',
            adminTitle: 'Groups management',
            form: {
                avatar: 'Avatar',
                name: 'Name',
                color: 'Color',
                users: 'Users'
            }
        },
        user: {
            signIn: 'Sign in',
            signUp: 'Sign up',
            signUpOtherAccount: 'Register another account',
            createAccount: 'Create an account',
            stillNotUser: 'Still you do not have user? ',
            alreadyAccount: 'Do you already have an account? ',
            forgotPassword: 'Forgot your password? ',
            adminTitle: 'Users management',
            createTitle: 'Creating user',
            updateTitle: 'Updating user',
            profile: 'Profile',
            logout: 'Logout',
            passwordRecovery: 'Password Recovery',
            changePassword: 'Change password',
            newPassword: 'New password',
            repeatNewPassword: 'Repeat new password',
            tokenActivationInvalid: 'Invalid Token',
            tokenActivationExpired: 'Token Expired',
            adminUserTitle: 'Users Administration',
            adminUserDescription: 'See, search, create, update and delete Users',
            adminGroupTitle: 'Group Administration',
            adminGroupDescription: 'See, search, create, update and delete Groups',
            adminRoleTitle: 'Role Administration',
            adminRoleDescription: 'See the system roles and their permissions',
            loginFailed: 'Logins Failed',
            noLoginFail: 'No failed login found',
            sessionsByUser: 'Users sessions',
            sessionsByDeviceType: 'Device type sessions',
            sessionsByOs: 'OS sessions',
            sessionsByClient: 'Client sessions',
            sessionsByCity: 'City sessions',
            sessionsByCountry: 'Country sessions',
            userAudit: 'User Audit',
            when: 'When',
            actionBy: 'Action By',
            actionFor: 'Action For',
            action: 'Action',
            audit: {
                today: 'Today',
                yesterday: 'Yesterday',
                userPasswordChange: 'user {username} has modified his password',
                adminPasswordChange: 'user {username}\'s password was changed by administrator',
                userCreated: 'user {username} has been created',
                userModified: 'user {username} has been modified',
                userDeleted: 'user {username} has been deleted',
                passwordRecovery: 'user {username} has requested to recover password',
                userRegistered: 'user {username} has registered',
                userActivated: 'user {username} has activated his account',
                avatarChange: 'user {username} has modified his avatar'

            },
            metrics: {
                duration: 'Duration',
                sessions: 'Sessions',
                request: 'Request',
                avg: 'Avg',
                min: 'Min',
                max: 'Max',
                sum: 'Sum',
                last: 'Last',
                qty: 'Qty',
                attempts: 'Attempts'
            },
            form: {
                username: 'Username',
                password: 'Password',
                fullname: 'Fullname',
                email: 'Email',
                phone: 'Phone',
                role: 'Role',
                groups: 'Groups',
                active: 'Active',
                actions: 'Actions',
                repeatEmail: 'Confirm email',
                repeatPassword: 'Confirm password',
            }
        }
    },
    es: {
        roles: {
            createTitle: 'Creando rol',
            updateTitle: 'Editando rol',
            adminTitle: 'Administración de roles',
            showTitle: 'Roles y Permisos',
            permission: 'Permiso',
            permissions: {
                SECURITY_USER_CREATE: 'Creación de usuarios',
                SECURITY_USER_EDIT: 'Edición de usuarios',
                SECURITY_USER_DELETE: 'Eliminación de usuarios',
                SECURITY_USER_SHOW: 'Visualización de usuarios',
                SECURITY_GROUP_CREATE: 'Creación de grupos',
                SECURITY_GROUP_EDIT: 'Edición de grupos',
                SECURITY_GROUP_DELETE: 'Eliminación de grupos',
                SECURITY_GROUP_SHOW: 'Visualización de grupos',
                SECURITY_ROLE_SHOW: 'Visualización de roles',
                SECURITY_ROLE_CREATE: 'Creación de roles',
                SECURITY_ROLE_EDIT: 'Edición de roles',
                SECURITY_DASHBOARD_SHOW: 'Visualización de panel de seguridad',
                CUSTOMIZATION_SHOW: 'Visualizacion de personalización',
                CUSTOMIZATION_COLORS_UPDATE: 'Edición de colores',
                CUSTOMIZATION_LOGO_UPDATE: 'Edición de logo',
                CUSTOMIZATION_LANG_UPDATE: 'Edición de lenguage'
            }
        },
        group: {
            createTitle: 'Creando grupo',
            updateTitle: 'Editando grupo',
            adminTitle: 'Administración de Grupos',
            form: {
                avatar: 'Avatar',
                name: 'Nombre',
                color: 'Color',
                users: 'Usuarios'
            }
        },
        user: {
            signIn: 'Iniciar sesión',
            signUp: 'Registrarse',
            signUpOtherAccount: 'Registrar otra cuenta',
            createAccount: 'Crear una cuenta',
            stillNotUser: 'Aun no tienes usuario? ',
            alreadyAccount: 'Ya tienes una cuenta? ',
            forgotPassword: 'Olvido su contraseña? ',
            adminTitle: 'Administración de Usuarios',
            createTitle: 'Creando usuario',
            updateTitle: 'Actualizando usuario',
            profile: 'Perfil',
            logout: 'Cerrar sesión',
            passwordRecovery: 'Recuperar contraseña',
            changePassword: 'Cambiar contraseña',
            newPassword: 'Nueva contraseña',
            repeatNewPassword: 'Repetir nueva contraseña',
            tokenActivationInvalid: 'Token Invalido',
            tokenActivationExpired: 'El Token Expiró',
            adminUserTitle: 'Administración de Usuarios',
            adminUserDescription: 'Ver, buscar, crear, editar, y borrar usuarios del sistema',
            adminGroupTitle: 'Administración de Grupos',
            adminGroupDescription: 'Ver, buscar, crear, editar, y borrar grupos del sistema',
            adminRoleTitle: 'Administración de Roles',
            adminRoleDescription: 'Ver los roles del sistema y sus permisos',
            loginFailed: 'Logins fallidos',
            noLoginFail: 'No se encontraron inicios fallidos',
            sessionsByUser: 'Sesiones por usuario',
            sessionsByDeviceType: 'Sesiones por Dispositivo',
            sessionsByOs: 'Sesiones por SO',
            sessionsByClient: 'Sesiones por Cliente',
            sessionsByCity: 'Sesiones por Ciudad',
            sessionsByCountry: 'Sesiones por País',
            userAudit: 'Auditoria de usuario',
            when: 'Cuando',
            actionBy: 'Acción Por',
            actionFor: 'Acción Para',
            action: 'Acción',
            audit: {
                today: 'Hoy',
                yesterday: 'ayer',
                userPasswordChange: 'usuario {username} ha modificado su contraseña',
                adminPasswordChange: 'la contraseña de {username} fue modificada por administrator',
                userCreated: 'usuario {username} ha sido creado',
                userModified: 'usuario {username} ha sido modificado',
                userDeleted: 'usuario {username} ha sido borrado',
                passwordRecovery: 'usuario {username} ha solicitado recuperar su contraseña',
                userRegistered: 'usuario {username} se ha registrado',
                userActivated: 'usuario {username} ha activado su cuenta',
                avatarChange: 'usuario {username} ha modificado su avatar'

            },
            metrics: {
                duration: 'Duración',
                sessions: 'Sesión',
                request: 'Solicitud',
                avg: 'Prom',
                min: 'Min',
                max: 'Max',
                sum: 'Sum',
                last: 'Últ',
                qty: 'Cant',
                attempts: 'Intentos'
            },
            form: {
                username: 'Usuario',
                password: 'Contraseña',
                fullname: 'Nombre y Apellido',
                email: 'Email',
                phone: 'Telefono',
                role: 'Rol',
                groups: 'Grupos',
                active: 'Activo',
                actions: 'Acciones',
                repeatEmail: 'Confirmar email',
                repeatPassword: 'Confirmar contraseña',
            }
        }

    },
    pt: {
        roles: {
            createTitle: 'Criando função',
            updateTitle: 'Atualizando função',
            adminTitle: 'Administração de função',
            showTitle: 'Funções e Permissões',
            permission: 'Permissão',
            permissions: {
                SECURITY_USER_CREATE: 'Criação do usuário',
                SECURITY_USER_EDIT: 'Edição do usuário',
                SECURITY_USER_DELETE: 'exclusão do usuário',
                SECURITY_USER_SHOW: 'Visualização do usuário',
                SECURITY_GROUP_CREATE: 'Criação em grupos',
                SECURITY_GROUP_EDIT: 'Edição em grupos',
                SECURITY_GROUP_DELETE: 'exclusão em grupos',
                SECURITY_GROUP_SHOW: 'Visualização em grupos',
                SECURITY_ROLE_SHOW: 'Visualização de roles',
                SECURITY_ROLE_CREATE: 'Criação de roles',
                SECURITY_ROLE_EDIT: 'Edição de roles',
                SECURITY_DASHBOARD_SHOW: 'Visor do painel de segurança',
                CUSTOMIZATION_SHOW: 'Visualização do personalización',
                CUSTOMIZATION_COLORS_UPDATE: 'Edição de cores',
                CUSTOMIZATION_LOGO_UPDATE: 'Edição de logo',
                CUSTOMIZATION_LANG_UPDATE: 'Edição de linguagem'
            }
        },
        group: {
            createTitle: 'Criando grupo',
            updateTitle: 'Atualizando grupo',
            adminTitle: 'Administração de Grupos',
            form: {
                avatar: 'Avatar',
                name: 'Nome',
                color: 'Cor',
                users: 'Usuários'
            }
        },
        user: {
            signIn: 'iniciar sessão',
            signUp: 'Registrar',
            signUpOtherAccount: 'Registrar outra conta',
            createAccount: 'Criar uma conta',
            stillNotUser: 'Você ainda não tem um usuário? ',
            alreadyAccount: 'Você já tem uma conta? ',
            forgotPassword: 'Esqueceu sua senha? ',
            adminTitle: 'Administração de usuários',
            createTitle: 'Criando usuário',
            updateTitle: 'Atualizando usuário',
            profile: 'Perfil',
            logout: 'Sair',
            passwordRecovery: 'Recuperar senha',
            changePassword: 'Alterar senha',
            newPassword: 'New password',
            repeatNewPassword: 'Repeat new password',
            tokenActivationInvalid: 'Invalid Token',
            tokenActivationExpired: 'Token Expired',
            adminUserTitle: 'Administração de Usuários',
            adminUserDescription: 'Ver, buscar, criar, editar e usar empréstimos do sistema',
            adminGroupTitle: 'Administração de Grupos',
            adminGroupDescription: 'Ver, buscar, criar, editar e usar  grupos del sistema',
            adminRoleTitle: 'Administração Funções',
            adminRoleDescription: 'Veja as funções do sistema e suas permissões',
            loginFailed: 'Falha no login',
            noLoginFail: 'Nenhum login com falha encontrado',
            sessionsByUser: 'Sessões por usuário',
            sessionsByDeviceType: 'Sessões por Dispositivo',
            sessionsByOs: 'Sessões por SO',
            sessionsByClient: 'Sessões por cliente',
            sessionsByCity: 'Sessões por cidade',
            sessionsByCountry: 'Sessões por país',
            userAudit: 'Auditoria de Usuário',
            when: 'Quando',
            actionBy: 'Ação por',
            actionFor: 'Ação Para',
            action: 'Ação',
            audit: {
                today: 'hoje',
                yesterday: 'ontem',
                userPasswordChange: 'Usuário {username} mudou sua senha',
                adminPasswordChange: 'a senha de {username} foi alterada pelo administrador',
                userCreated: 'Usuário {username} foi criado',
                userModified: 'Usuário {username} foi modificado',
                userDeleted: 'Usuário {username}  foi excluído',
                passwordRecovery: 'Usuário {username} solicitou recuperar sua senha',
                userRegistered: 'Usuário {username}  se cadastrou',
                userActivated: 'Usuário {username} ativou sua conta',
                avatarChange: 'Usuário {username} mudou sua avatar'

            },
            metrics: {
                duration: 'Duração',
                sessions: 'Sessão',
                request: 'Solicitação',
                avg: 'Med',
                sum: 'Sum',
                min: 'Min',
                max: 'Max',
                last: 'Últ',
                qty: 'Quant',
                attempts: 'Tentativas'
            },
            form: {
                username: 'Usuário',
                password: 'senha',
                fullname: 'Nome completo',
                email: 'Email',
                phone: 'Telefone',
                role: 'Função',
                groups: 'Grupos',
                active: 'Ativo',
                actions: 'Ações',
                repeatEmail: 'Confirmar o e-mail',
                repeatPassword: 'Confirmar a senha',
            }
        }
    }
}


export default messages
