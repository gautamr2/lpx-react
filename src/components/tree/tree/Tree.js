import React from 'react'
import './style.scss'

export const Tree = () => (
  <div className="tree">
    <div>Parent</div>
    <ul>
      <li>
        Fruit
      <ul>
          <li>
            Red
          <ul>
              <li>Cherry</li>
              <li>
                <div>
                  sdfsdfd
                  <div>
                    dfsdff
                  </div>
                </div>
                <div>
                  sdfsdfd
                  <div>
                    dfsdff
                  </div>
                </div>
              </li>
              <li>sdsdsdf</li>
            </ul>
          </li>
          <li>
            Yellow
          <ul>
              <li>Banana</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        Milk
      <ul>
          <li>Butter</li>
          <li>Gem</li>
        </ul>
      </li>
    </ul>
  </div>
)


