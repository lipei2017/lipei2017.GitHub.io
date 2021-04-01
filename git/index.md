## git 工作流

- Git Flow

- GitHub Flow

- GitLab Flow
  - GitLab flow 是 GitLab 官方推荐的分支管理策略，Gitlab flow 的最大原则叫做"上游优先"（upsteam first），即只存在一个主分支 master，它是所有其他分支的"上游"。只有上游分支采纳的代码变化，才能应用到其他分支。

## 您永远不应该 rebase 那些已推送到远程服务器的提交

## GitLab 分支管理规范

[link]https://zhuanlan.zhihu.com/p/38774185

[link]https://juejin.cn/post/6844903775140839432

[link]http://www.ruanyifeng.com/blog/2015/12/git-workflow.html

## 撤销 commit

git reset --soft HEAD^

- --mixed 意思是：不删除工作空间改动代码，撤销 commit，并且撤销 git add . 操作这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。

- --soft 不删除工作空间改动代码，撤销 commit，不撤销 git add .

- --hard 删除工作空间改动代码，撤销 commit，撤销 git add .

注意完成这个操作后，就恢复到了上一次的 commit 状态。

## git 标签

```
git tag -a v1.4 -m "my version 1.4"
git push <remote> --tags
```

> tag 和具体某次 commit 有关，和分支无关

## git merge --no-ff

Git 会用 Fast forward 模式，但这种模式下，删除分支后，会丢掉分支信息

## 版本回退

```
git reset --hard HEAD^
```

- HEAD 表示当前版本，上一个版本 HEAD^，上上个版本 HEAD^^,上 100 个版本 HEAD~100
- HEAD 指向的版本就是当前版本，因此，Git 允许我们在版本的历史之间穿梭，使用命令 git reset --hard commit_id。
- 穿梭前，用 git log 可以查看提交历史，以便确定要回退到哪个版本。
- 要重返未来，用 git reflog 查看命令历史，以便确定要回到未来的哪个版本。

## 工作区和暂存区

![image](http://blog.shuyi7.top/img/repository.jpg)

## 撤销修改

总之，就是让这个文件回到最近一次 git commit 或 git add 时的状态。

```
git checkout -- readme.txt
```

用命令 git reset HEAD <file>可以把暂存区的修改撤销掉（unstage），重新放回工作区：

```
$ git reset HEAD readme.txt
Unstaged changes after reset:
M	readme.txt
```

- 场景 1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令 git checkout -- file。

- 场景 2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令 git reset HEAD <file>，就回到了场景 1，第二步按场景 1 操作。

- 场景 3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。
