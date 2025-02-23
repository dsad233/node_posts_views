export class PostsService {
    constructor(postsRepository){
        this.postsRepository = postsRepository;
    }

    find = async () => {
        const find = await this.postsRepository.find();

        if(find && find.length === 0){
            throw new Error("게시글 목록들이 존재하지 않습니다.");
        }

        return find;
    };

    findOne = async (id, host) => {
        const findOne = await this.postsRepository.findOne(id);

        if(!findOne){
            throw new Error("게시글 목록들이 존재하지 않습니다.");
        }

        const findUser = await this.postsRepository.findUser(host);

        if(!findUser){
            await this.postsRepository.userCreate(host);
            await this.postsRepository.update(id);
        }

        return findOne;
    };

    create = async (title, context) => {
        const create = await this.postsRepository.create(title, context);
        
        return create;
    };

    
}