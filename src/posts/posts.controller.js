export class PostsController {
    constructor(postsService){
        this.postsService = postsService;
    }

    find = async (req, res) => {
        try {
            const find = await this.postsService.find();

            return res.status(200).json({ message : "게시글 전체 조회", data : find });
        } catch (err){
            console.error(err);
            return res.status(500).json({ message : "서버 오류가 발생하였습니다." });
        }
    };

    findOne = async (req, res) => {
        try {
            const { id } = req.params;
            const host = req.headers['user-agent'];

            const findOne = await this.postsService.findOne(+id, host);
            
            return res.status(200).json({ message : "게시글 전체 조회", data : findOne });
        } catch (err){
            console.error(err);
            return res.status(500).json({ message : "서버 오류가 발생하였습니다." });
        }
    }

    create = async (req, res, next) => {
        try {
            const { title, context } = req.body;
    
            if(!title){
                return res.status(400).json({ message : "제목을 작성해주세요." });
            }
    
            if(!context){
                return res.status(400).json({ message : "내용을 작성해주세요." });
            }
    
            await this.postsService.create(title, context);
    
            return res.status(200).json({ message : "게시글 생성" });
        } catch (err){
            console.error(err);
            return res.status(500).json({ message : "서버 오류가 발생하였습니다." });
        }
    }
}