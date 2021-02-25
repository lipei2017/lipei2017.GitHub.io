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

te
