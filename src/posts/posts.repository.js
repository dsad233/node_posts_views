export class PostsRepository {
    constructor(prisma){
        this.prisma = prisma;
    }

    find = async () => {
        const find = await this.prisma.posts.findMany({
            select : {
                id : true,
                title : true,
                context : true,
                views : true,
                createdAt : true,
                updatedAt : true
            }
        });

        return find;
    };

    findOne = async (id) => {
        const findOne = await this.prisma.posts.findFirst({
            where : { id },
            select : {
                id : true,
                title : true,
                context : true,
                views : true,
                createdAt : true,
                updatedAt : true
            }
        });

        return findOne;
    }

    findUser = async (host) => {
        const findUser = await this.prisma.users.findFirst({
            where : { host },
            select : {
                id : true
            }
        });

        return findUser;
    };

    userCreate = async (host) => {
        const create = await this.prisma.users.create({
            data : {
                host
            }
        });

        return create;
    };

    create = async (title, context) => {
        const create = await this.prisma.posts.create({
            data : {
                title,
                context
            }
        });

        return create;
    }

    update = async (id) => {
        const findOne = await this.prisma.posts.findFirst({
            where : { id }
        });

        let plus = findOne.views + 1;
        
        const update = await this.prisma.posts.update({
            where : { id },
            data : {
                views : plus
            }
        });

        return update;
    }
}
