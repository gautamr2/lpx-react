import React from 'react'
import './style.scss'

export const Branch = ({ children }) => <ul>{children}</ul>
export const Leaf = ({ children }) => <li>{children}</li>
export const Tree = ({ parent, children }) => (
  <div className="lpx-tree">
    <div>{parent}</div>
    {children}
  </div>
)

export const TreeStructure = () => (
  <Tree>
    <Branch>
      <Leaf>
        Organic
        <Branch>
          <Leaf>
            Fruits
            <Branch>
              <Leaf>🍓</Leaf>
              <Leaf>🍌</Leaf>
              <Leaf>🍍</Leaf>
            </Branch>
          </Leaf>
          <Leaf>
            Vegetables
            <Branch>
              <Leaf>🍃</Leaf>
              <Leaf>🌽</Leaf>
            </Branch>
          </Leaf>
        </Branch>
      </Leaf>
      <Leaf>
        Junk
        <Branch>
          <Leaf>🍔</Leaf>
          <Leaf>🍧</Leaf>
        </Branch>
      </Leaf>
    </Branch>
  </Tree>
)
