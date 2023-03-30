type WordDictionary struct {
	root *Tree
}

type Tree struct {
	childrens map[rune]*Tree
	isLeaf    bool
}

func NewTreeChildrens() *Tree {
	return &Tree{
		childrens: make(map[rune]*Tree),
		isLeaf:    false,
	}
}

func Constructor() WordDictionary {
	return WordDictionary{
		root: NewTreeChildrens(),
	}
}

func (this *WordDictionary) AddWord(word string)  {
	curr := this.root
	for _, w := range word {
		if curr.childrens[w] == nil {
			curr.childrens[w] = NewTreeChildrens()
		}
		curr = curr.childrens[w]
	}
	curr.isLeaf = true
}

func DepthFirstSearch(word string, node *Tree) bool {
	for i, w := range word {
		if w == '.' {
			for _, children := range node.childrens {
				if DepthFirstSearch(word[i+1:], children) {
					return true
				}
			}
			return false
		} else if node.childrens[w] == nil {
			return false
		}
		node = node.childrens[w]
	}
	return node.isLeaf
}

func (this *WordDictionary) Search(word string) bool {
	return DepthFirstSearch(word, this.root)
}


/**
 * Your WordDictionary object will be instantiated and called as such:
 * obj := Constructor();
 * obj.AddWord(word);
 * param_2 := obj.Search(word);
 */